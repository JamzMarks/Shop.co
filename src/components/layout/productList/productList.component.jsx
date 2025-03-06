import styles from './productList.module.scss';

function ProductList(props){
    const {title} = props;
    return(
        <section class={styles.container}>
            <h2 class={styles.title}>{title}</h2>
            <div id="newArrivals" class={styles.productList}>

            </div>
            <button type="button" id="newProducts" class="productListBtn btns btnWhite">View all</button>
        </section>
    )
}

export default ProductList;