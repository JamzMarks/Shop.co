import { useState } from "react";
import Button from "../../../components/common/button/button.component";
import styles from "./info.module.scss";
import ImageShow from "./imageShow/imageShow.component";
import StarRating from "../../../components/common/rate/starRating";
import IncreaseButton from "../../../components/common/increaseButton/increaseButton.component";
import { Product } from "../../../types/product.interface";
import { getDiscountPrice } from '../../../utils/getDiscountPrice';
import { Size } from "../../../types/size-type";

interface ProductItem {
  product: Product;
}
function ProductInfo({ product }: ProductItem) {
  const [selectedColor, setSelectedColor] = useState<string>(product.color[0]);
  const [selectedSize, setSelectedSize] = useState<string>();

  return (
    <section className={styles.product}>
      <ImageShow
        images={product.image}
      />
      <div className={styles.info}>
        <div className={styles.details}>
          <div className={styles.upper}>
            <h3 className={styles.title}>{product.title}</h3>
            <StarRating
              rate={product.rating}
              showRate={true}
            />
            <div className={styles.priceWrapper}>
              <p className={styles.price}>${getDiscountPrice(
                product.price, product.discount ? product.discount : 0 
                )}
              </p>
              {product.discount !== 0 && (
                <>
                <p className={styles.discount}>${product.price}</p>
                <div className={styles.percentage}>
                  <span>{product.discount}%</span>
                </div>
                </> 
              )}
            </div>
          </div>

          <div className={styles.description}>
            <p>
              {product.description}
            </p>
          </div>
        </div>
        <div className={styles.productUI}>
          <div className={styles.colorWrapper}>
            <p className={styles.funcTitle}>Select Colors</p>
            <div className={styles.colors}>
              {product.color.map((color, index) => (
                <label key={index} className={styles.colorOption}>
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                  />
                  <span
                    className={styles.circle}
                    style={{ backgroundColor: color }}
                  ></span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.sizeWrapper}>
            <p className={styles.funcTitle}>Choose Size</p>
            <div className={styles.sizes}>
            {product.size
              .map((item, index) => {
                // @ts-ignore
                let labelSize = Size[item as keyof typeof Size];
                return (
                  <div className={styles.item} key={index}  >
                    <label htmlFor={item}>
                      {labelSize}
                      <input id={item} 
                        name="size" 
                        type="radio" 
                        value={item} 
                        checked={selectedSize === item} 
                        onChange={() => setSelectedColor(item)}
                      />
                    </label>
                  
                </div>      
            )})}
            </div>
          </div>
          <div className={styles.buttons}>
            <IncreaseButton/>
            
            <Button type="submit" text="Add to Cart" btnStyle="black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
