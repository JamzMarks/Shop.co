import { useState } from "react";
import Button from "../../../components/common/button/button.component";
// import { Product } from "../../../types/product.interface";
import styles from "./info.module.scss";
import ImageShow from "./imageShow/imageShow.component";

// interface ProductItem {
//   product?: Product;
// }
// function ProductInfo({ product }: ProductItem) {
const colorsRadio = ["#ff0000", "#00ff00", "#0000ff"]; // Vermelho, Verde, Azul
function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState<string>(colorsRadio[0]);
  const [qtd, setQtd] = useState(1);
  // const [selectedSize, setselectedSize] = useState<string>(sizes[0]);
  return (
    <section className={styles.product}>
      <ImageShow></ImageShow>
      <div className={styles.info}>
        <div className={styles.details}>
          <div className={styles.upper}>
            <h3 className={styles.title}>Um titulo</h3>
            <div className={styles.rateWrapper}>
              <div className={styles.stars}></div>
              <p>3/5</p>
            </div>
            <div className={styles.priceWrapper}>
              <p className={styles.price}>$123</p>
              <p className={styles.discount}>$123</p>
              <div className={styles.percentage}>
                <span>12%</span>
              </div>
              {/* {product.discount !== 0 && (
                                <>
                                
                                </> 
                            )} */}
            </div>
          </div>

          <div className={styles.description}>
            <p>
              Lorem ipsum alasdasd asda asdad ad ad as dasdasdada asdada
              asdasdasdad asdasd asd
            </p>
          </div>
        </div>
        <div className={styles.productUI}>
          <div className={styles.colorWrapper}>
            <p className={styles.funcTitle}>Select Colors</p>
            <div className={styles.colors}>
              {colorsRadio.map((color, index) => (
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
              <div className={styles.item}>
                <label htmlFor="small">Small</label>
                <input id="small" name="size" type="radio" value="small" />
              </div>
              <div className={styles.item}>
                <label htmlFor="medium">Medium</label>
                <input id="medium" name="size" type="radio" value="medium" />
              </div>
              <div className={styles.item}>
                <label htmlFor="large">Large</label>
                <input id="large" name="size" type="radio" value="large" />
              </div>
              <div className={styles.item}>
                <label htmlFor="xlarge">X-Large</label>
                <input id="xlarge" name="size" type="radio" value="xlarge" />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.qtdBtn}>
              <button
                className={styles.qtdFunc}
                onClick={() => setQtd((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <span className={styles.value}>{qtd}</span>
              <button
                className={styles.qtdFunc}
                onClick={() => setQtd((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <Button type="submit" text="Add to Cart" btnStyle="black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
