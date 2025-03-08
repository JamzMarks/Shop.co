import ProductInfo from './info/info.component';
import styles from './product.module.scss';

import { getProductById, getProductsByDress, getReviewByProductId } from "../../services/dataService";
import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { useNavigate } from 'react-router-dom';
import { Review } from '../../types/review.interface';


function ProductPage(){
    const [product, setProducts] = useState<Product>()
    const [reviews, setReviews] = useState<Review[]>([])
    const [related, setRelated] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const fetchedData = await getProductById(9);
            if (!fetchedData) {
                navigate('/404');
            }
            const fetchReviewData = await getReviewByProductId(11);
            const fetchRelatedData = await getProductsByDress('Casual');
            setRelated(fetchRelatedData)
            setReviews(fetchReviewData);
            setProducts(fetchedData);
          } catch (error) {
            console.error(error);
            navigate('/404'); 
          }
        };
    
        fetchProduct();
      }, [navigate]);

      if (!product) {
        return null;
    }
    return(
        <section className={styles.content}>
            <ProductInfo
            product={product}/>
        </section>
    )
}

export default ProductPage;