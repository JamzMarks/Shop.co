import { useState } from 'react';
import Button from '../../../components/common/button/button.component';
import { Review } from '../../../types/review.interface';
import styles from './productReview.module.scss';
import ReviewCard from '../../../components/ui/reviewCard/reviewCard.component';

interface productReviewProps{
    reviews: Review[]
}
const tabs = [
    { id: "PD", label: "Product Details" },
    { id: "RR", label: "Rating & Reviews" },
    { id: "FAQ", label: "FAQs" }
  ];

function ProductReview({reviews}: productReviewProps){

    const [activeTab, setActiveTab] = useState("RR");

    return(
        <section className={styles.productReview}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                {tabs.map((tab) => (
                    <li
                    key={tab.id}
                    className={`${styles.item} ${activeTab === tab.id ? styles.checked : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {tab.label}
                    </li>
                ))}
                </ul>
            </nav>
            <div className={styles.moreInfo}>
                <div className={styles.hud}>
                    <h3>All Reviews <span>({reviews.length})</span></h3>
                    <div className={styles.button}>
                        <Button
                            text=''
                            type='button'
                            btnStyle='white'
                        />
                        <Button
                            text='Latest'
                            type='button'
                            btnStyle='white'
                        />
                        <Button
                            text='Write a review'
                            type='button'
                            btnStyle='black2'
                        />
                    </div>
                </div>
                <section className={styles.content}>
                    <div className={styles.reviewList}>
                        {reviews.map((element, index) => (
                            <ReviewCard key={index} review={element} withDate={true}></ReviewCard>
                        ))}
                    </div>
                    <div className={styles.loadMoreBtn}>
                        <Button text='Load More reviews' type='button' btnStyle='white'></Button>

                    </div>
                </section>
            </div>
            
        </section>
    )
}

export default ProductReview;