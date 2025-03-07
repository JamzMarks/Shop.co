import { Review } from '../../../types/review.interface';
import StarRating from '../../common/rate/starRating';
import styles from './reviewCard.module.scss';
import { dateToText } from '../../../utils/dateConversor';
interface ReviewProps {
    review: Review,
    withDate: boolean
}

function ReviewCard(){
    const review = {
            id: 1,
            user: "James Marques",
            review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
            rating: 3,
            date: new Date()
    }
    return(
        <article className={styles.reviewCard}>
            <StarRating
                rate={review.rating}
            />
            <div className={styles.user}>
                <p className={styles.name}>{review.user}</p>
                <img src='\assets\images\icons\check.svg' alt='check mark'/>
            </div>
            <p className={styles.review}>{review.review}</p>

            {review.date && <p className={styles.date}>Posted on <span>{dateToText(review.date)}</span></p>}

        </article>
    )
}

export default ReviewCard;