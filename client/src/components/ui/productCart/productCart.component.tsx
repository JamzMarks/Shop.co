import styles from './productCart.module.scss';
import { ProductCart } from '../../../types/product.interface';
import IncreaseButton from '../../common/increaseButton/increaseButton.component';

interface ProductCardProps {
    product: ProductCart;
}

function ProductCartItem({product}: ProductCardProps){

    return(
        <article className={styles.productCart}>
            <div className={styles.image}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.container}>
                <div>
                    <div className={styles.upper}>
                        <h3 className={styles.name}>{product.title}</h3>
                        <button className={styles.trash}><img src="\assets\images\icons\trash.svg" alt="trash" /></button>
                    </div>
                    <div className={styles.specWrapper}>
                        <p className={styles.spec}>Size:<span>{product.price}</span></p>
                        <p className={styles.spec}>Color: <span>{product.price}</span></p> 
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.price}>${product.price}</p>
                    <IncreaseButton/>
                </div>
            </div>
        </article>
    )
}

export default ProductCartItem;