import Brands from "./brands/brands.components";
import Category from "./category/category.component";
import Thumb from "./thumb/thumb.component";
import global from '../../assets/styles/globalStyles.module.css';
import styles from './home.module.scss';
import ProductList from '../../components/layout/productList/productList.component';
import ReviewCard from "../../components/ui/reviewCard/reviewCard.component";
import { useReviews } from "../../hooks/useReview";

function Home(){
    const {reviews} = useReviews(1);
    return(
        <>
            <Thumb></Thumb>
            <Brands></Brands>
            <div className={`${global.container} ${styles.content}`}>
                <div className={styles.productLists}>
                    <ProductList
                        title="New Arrivals"
                        viewAll={true}
                        max={4}
                    />
                    <ProductList
                        title="Top selling"
                        viewAll={true}
                        max={4}
                    />
                </div>
                
                <Category></Category>
                <div className={styles.reviewsSection}>
                    <div className={styles.reviewTitle}>
                        <h2 className={styles.title}>Our happy customers</h2>
                        <div className={styles.arrows}>
                            <button id="prev" type="button" className={styles.arrowBtn}>
                                <img src="assets\images\icons\arrows\left-arrow.svg" alt="left arrow"/>
                            </button>
                            <button id="next" type="button" className={styles.arrowBtn}>
                                <img src="assets\images\icons\arrows\right-arrow.svg" alt="right arrow"/>
                            </button>
                        </div> 
                    </div>
                    <div className={styles.reviewList}>
                        {reviews.map((element, index) => (
                            <ReviewCard
                            key={index}
                            review={element}
                            withDate={false}
                            />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Home;