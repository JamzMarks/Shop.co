import { useEffect, useState } from 'react';
import styles from './category.module.scss';
import { Product } from '../../types/product.interface';
import { useParams } from 'react-router-dom';
import Filter from './filter/filter.component';
import globals from '../../assets/styles/globalStyles.module.css';
import CategoryList from './categoryList/categoryList.component';
import { getProduct } from '../../services/dataService';
import SortBy from '../../components/common/sortBy/sortBy.component';

function Category(){
    const [products, setProducts] = useState<Product[]>([]);
    const [showFilter, setShowFilter] = useState<boolean>(window.innerWidth > 1028);
    const params = useParams();
    useEffect(() => {
        const handleResize = () => {
            setShowFilter(window.innerWidth > 1028);
        };
        const fetchData = async () => {
            try {
                const data = await getProduct();
                setProducts(data)
            } catch (error) {
                
            }
        }
        fetchData();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function toggleFilters(){
        setShowFilter((prev) => !prev);
    }

    return(
        <section className={globals.container}>
            <div className={styles.content}>
            {showFilter && <Filter toggleFilters={toggleFilters}/>}
                <div className={styles.productSection}>
                    <div className={styles.title}>
                        <h1>Category</h1>
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