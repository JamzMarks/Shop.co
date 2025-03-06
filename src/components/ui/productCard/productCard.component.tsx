import styles from './productCard.module.scss';
import { Product } from '../../../types/product.interface';

interface ProductCardProps {
    product: Product;
}

function ProductCard({product}: ProductCardProps){

    return(
        <article className={styles.productCard}>
            <div className={styles.image}>
                <img src={product.image[0]} alt={product.title} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}><a href="">{product.title}</a></h3>
                <div className={styles.rateWrapper}>
                    <div className={styles.stars}>
                        
                    </div>
                    <p>{product.rating}/5</p>
                </div>
                <div className={styles.priceWrapper}>
                    <p className={styles.price}>{product.price}</p>
                    {product.discount !== 0 && (
                       <>
                        <p className={styles.discount}>{product.price}</p>
                        <div className={styles.percentage}>
                            <span>{product.discount}%</span>
                        </div>
                       </> 
                    )}
                    
                </div>
            </div>
        </article>
    )
}

export default ProductCard;