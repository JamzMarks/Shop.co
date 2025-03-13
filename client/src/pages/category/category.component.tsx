import { useEffect, useState } from 'react';
import styles from './category.module.scss';
import { Product } from '../../types/product.interface';
import { useParams } from 'react-router-dom';
import Filter from './filter/filter.component';
import globals from '../../assets/styles/globalStyles.module.css';
import CategoryList from './categoryList/categoryList.component';
import { getProduct } from '../../services/dataService';
import SortBy from '../../components/common/sortBy/sortBy.component';
import { Size } from '../../types/size-type';
import { Dress } from '../../types/dress-type';
import { Category as CategoryType } from '../../types/category-type';
import { getSizeKey } from '../../utils/validator/Size-validator';

function Category(){
    const [products, setProducts] = useState<Product[]>([]);
    const [showFilter, setShowFilter] = useState<boolean>(window.innerWidth > 1028);
    const params = useParams<{ dress?: string }>();
    
    const [appliedFilters, setAppliedFilters] = useState<{
        price: number | null;
        dress: Dress | null;
        category: CategoryType | null;
        size: Size[];
        color: string[];
    }>({
        price: null,
        dress: params.dress ? params.dress as Dress : null,
        category: null,
        size: [],
        color: []
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        if (params.dress) {
          const isValidDress = Object.values(Dress).includes(params.dress as Dress);
          if (isValidDress) {
            setAppliedFilters(prevFilters => ({
              ...prevFilters,
              dress: params.dress as Dress, 
            }));
          } else {
            setAppliedFilters(prevFilters => ({
              ...prevFilters,
              dress: null,
            }));
          }
        }
      }, [params.dress]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => {
            setShowFilter(window.innerWidth > 1028);
        };
        const fetchData = async () => {
            try {
                const data = await getProduct();

                setProducts(handleFilterProducts(data));
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }
        fetchData();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [appliedFilters]);
    function toggleFilters(){
        setShowFilter((prev) => !prev);
    }
    
    function handleFilterProducts(data: Product[]): Product[]{
        let filteredProducts = data;
            if (appliedFilters.dress) {
                filteredProducts = filteredProducts.filter(
                    product => product.dress === appliedFilters.dress
                );
            }
        if (appliedFilters.category !== null) {
            filteredProducts = filteredProducts.filter(
              product => product.category === appliedFilters.category
            );
        }
        if (appliedFilters.size.length !== 0) {
            const selectedSizeKeys = appliedFilters.size
                .map(getSizeKey)
                .filter((size): size is keyof typeof Size => size !== undefined);
        
            filteredProducts = filteredProducts.filter(product =>
                Array.isArray(product.size)
                    ? product.size.some(size => selectedSizeKeys.includes(size as unknown as keyof typeof Size))
                    : selectedSizeKeys.includes(getSizeKey(product.size as string) as unknown as keyof typeof Size)
            );
        }
        return filteredProducts;
    }

    const handleApplyFilters = (filters: {
        price: number;
        dress: Dress | null;
        category: CategoryType | null;
        size: Size[];
        color: string[];
    }) => {
        setAppliedFilters(filters);
    };
    
    return(
        <section className={globals.container}>
            <div className={styles.content}>
            {showFilter && <Filter toggleFilters={toggleFilters} onApplyFilters={handleApplyFilters}/>}
                <div className={styles.productSection}>
                    <div className={styles.title}>
                        <h1>{appliedFilters.dress ? appliedFilters.dress.toString() : 'Category'}</h1>
                        <div className={styles.pageInfo}>
                            <p>Showing 1-10 of <span>{products.length} Products</span></p>
                            <div className={styles.sortBy}>
                                <SortBy></SortBy>
                            </div>
                            <button type="button" onClick={toggleFilters}>
                                <img src="assets\images\icons\filter.svg" alt="filter" />
                            </button>
                        </div>
                    </div>
                    <CategoryList
                    products={products}
                    />
                </div>
            </div>
        </section>
    )
}

export default Category;