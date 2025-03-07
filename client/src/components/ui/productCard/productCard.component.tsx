import styles from './productCard.module.scss';
import { Product } from '../../../types/product.interface';
import StarRating from '../../common/rate/starRating';

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
                <StarRating
                    rate={product.rating}
                    showRate={true}
                />
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