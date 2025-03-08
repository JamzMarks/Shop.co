import { Review } from '../../../types/review.interface';
import styles from './productReview.module.scss';

interface productReviewProps{
    reviews: Review[]
}

function ProductReview({reviews}: productReviewProps){
    console.log(reviews)
    return(
        <section className={styles.productReview}>
            <nav className={styles.nav}>

            </nav>
            <div className={styles.hud}>

            </div>
            <section className={styles.content}>

            </section>
        </section>
    )
}

export default ProductReview;