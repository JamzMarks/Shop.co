import ProductInfo from "./info/info.component";
import styles from "./product.module.scss";
import {
  getProductById,
  getProductsByDress
} from "../../services/dataService";
import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { useNavigate, useParams } from "react-router-dom";
import ProductReview from "./productReview/productReview.component";
import ProductList from "../../components/layout/productList/productList.component";
import { useReviews } from "../../hooks/useReview";

function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);  
  const [product, setProducts] = useState<Product>();
  const { reviews } = useReviews(productId);
  const [related, setRelated] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
        window.scrollTo(0, 0);
      try {
        if (!id) {
            navigate("/404");
            return;
          }
          if (isNaN(productId)) {
            navigate("/404"); 
            return;
          }

        const fetchedData = await getProductById(productId);
        if (!fetchedData) {
          navigate("/404");
        }
        const fetchRelatedData = await getProductsByDress("Casual");
        setRelated(fetchRelatedData);
        setProducts(fetchedData);
      } catch (error) {
        console.error(error);
        navigate("/404");
      }
    };

    fetchProduct();
  }, [navigate]);

  if (!product) {
    return null;
  }

  return (
    <section className={styles.content}>
      <ProductInfo product={product} />
      <ProductReview reviews={reviews}/>
        <ProductList title="You might also like" viewAll={false} max={4}/>
    </section>
  );
}

export default ProductPage;
