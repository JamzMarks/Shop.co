import { useEffect, useState } from 'react';
import styles from './category.module.scss';
import { Product } from '../../types/product.interface';
import { useParams } from 'react-router-dom';
import Filter from './filter/filter.component';
import globals from '../../assets/styles/globalStyles.module.css';
import CategoryList from './categoryList/categoryList.component';
import { getProduct } from '../../services/dataService';

function Category(){
    const [products, setProducts] = useState<Product[]>([]);
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProduct();
                setProducts(data)
            } catch (error) {
                
            }
        }
        fetchData();
        console.log(products)
    }, []);
    return(
        <section className={globals.container}>
            <div className={styles.content}>
                <Filter></Filter>
                <div className={styles.productSection}>
                    <div className={styles.tile}>
                        <h1>Casual</h1>
                        <div>

                        </div>
                    </div>
                <CategoryList
                products={products}
                ></CategoryList>
                    <div className={styles.pagination}>
                        <button>Previous</button>
                        <div>
                            1
                        </div>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;