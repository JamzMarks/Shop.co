import styles from './productCard.module.scss';

function ProductCard(){
    const product = {
        id: 6,
        title: "SKINNY FIT JEANS 2",
        price: 350,
        image: "assets/images/products/pants1.png",
        discount: 15,
        rating: 3
      }

    return(
        <article className={styles.productCard}>
            <div className={styles.image}>
                <img src={product.image} alt={product.title} />
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