import { useState } from "react";
import styles from "../info.module.scss";


function ImageShow() {
  const images = [
    "/assets/images/products/jeans2.png",
    "/assets/images/products/shirt1.png",
    "/assets/images/products/jeans3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className={styles.imageWrapper}>
    <div className={styles.image}>
      <img src={selectedImage} alt="foto principal" />
    </div>

    <div className={styles.listImage}>
      {images.map((img, index) => (
        <label key={index} className={styles.item}>
          <input
            type="radio"
            name="image-select"
            checked={selectedImage === img}
            onChange={() => setSelectedImage(img)}
            style={{ display: "none" }}
          />
          <img src={img} alt={`foto ${index}`} />
        </label>
      ))}
    </div>
  </div>
  
  );
}

export default ImageShow;
