import { useState } from "react";
import styles from "../info.module.scss";

interface ImageShowProps{
  images: string[]
}
function ImageShow({images}: ImageShowProps) {
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
