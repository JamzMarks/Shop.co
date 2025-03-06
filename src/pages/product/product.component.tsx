import ProductInfo from './info/info.component';
import styles from './product.module.scss';

function ProductPage(){
    return(
        <section className={styles.content}>
            <ProductInfo></ProductInfo>
        </section>
    )
}

export default ProductPage;