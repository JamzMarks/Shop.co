import { useEffect, useState } from 'react';
import styles from './productList.module.scss';
import {Product} from '../../../types/product.interface';
import { fetchData } from '../../../services/dataService';
import ProductCard from '../../ui/productCard/productCard.component';
import Button from '../../common/button/button.component';

interface ProductListProps {
    title: string;
    max: number;
  }

function ProductList({title}: ProductListProps){
    const [prodcuts, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const data = await fetchData();
            setProducts(data as Product[]);
          } catch (error) {
            console.log(error)
            setError('Erro ao carregar os produtos');
          }
        };
    
        getProducts();
      }, []);
      if (error) {
        return <p>{error}</p>;
      }
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.productList}>
                {prodcuts.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
            <Button
                type="button"
                text='View All'
                btnStyle='white'
            />
        </section>
    )
}

export default ProductList;