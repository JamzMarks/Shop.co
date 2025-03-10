import styles from './productCard.module.scss';
import { Product } from '../../../types/product.interface';
import StarRating from '../../common/rate/starRating';
import { getImagePath } from '../../../utils/getImage';
import { Link } from 'react-router-dom';
import { getDiscountPrice } from '../../../utils/getDiscountPrice';
interface ProductCardProps {
    product: Product;
}

function ProductCard({product}: ProductCardProps){
    return(
        <article className={styles.productCard}>
            <div className={styles.image}>
                <img src={getImagePath(product.image[1])} alt={product.title} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}><Link to={`/product/${product.id}`}>{product.title.toLowerCase()}</Link></h3>
                <StarRating
                    rate={product.rating}
                    showRate={true}
                />
                <div className={styles.priceWrapper}>
                    <p className={styles.price}>{getDiscountPrice(
                                    product.price, product.discount ? product.discount : 0 
                                    )}</p>
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