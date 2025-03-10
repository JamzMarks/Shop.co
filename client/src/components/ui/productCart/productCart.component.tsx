import styles from './productCart.module.scss';
import { Product, ProductCart } from '../../../types/product.interface';
import IncreaseButton from '../../common/increaseButton/increaseButton.component';
import { useEffect, useState } from 'react';
import { getProductById } from '../../../services/dataService';
import { getImagePath } from '../../../utils/getImage';

interface ProductCardProps {
    productBuy: ProductCart;
}

function ProductCartItem({productBuy}: ProductCardProps){
    const [count, setCount] = useState(1);
    const [productInfo, setProductInfo] = useState<Product>();
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const data = await getProductById(productBuy.productId);
            if (data) {
              setProductInfo(data);
            }
          } catch (error) {
            console.error("Error fetching product:", error); 
          }
        };
      
        if (productBuy.productId) { 
          fetchProduct();
        }
      }, [productBuy.productId]);
      return (
        <>
          {productInfo ? (
            <article className={styles.productCart}>
              <div className={styles.image}>
                <img src={getImagePath(productInfo.image[0])} alt={productInfo.title} />
              </div>
              <div className={styles.container}>
                <div>
                  <div className={styles.upper}>
                    <h3 className={styles.name}>{productInfo.title.toLowerCase()}</h3>
                    <button className={styles.trash}>
                      <img src="\assets\images\icons\trash.svg" alt="trash" />
                    </button>
                  </div>
                  <div className={styles.specWrapper}>
                    {/* <p className={styles.spec}>Size:<span>{productBuy.size}</span></p> */}
                    <p className={styles.spec}>Color: <span>{productBuy.color}</span></p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <p className={styles.price}>${productInfo.price}</p>
                  <IncreaseButton count={count} setCount={setCount} />
                </div>
              </div>
            </article>
          ) : (
            <div className={styles.loading}>Loading order information...</div>
          )}
        </>
      );
}

export default ProductCartItem;