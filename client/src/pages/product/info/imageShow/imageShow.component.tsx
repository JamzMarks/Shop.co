import { useState } from "react";
import styles from "../info.module.scss";
import { API_URL } from "../../../../services/dataService";
interface ImageShowProps{
  images: string[]
}
function ImageShow({images}: ImageShowProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <img src={API_URL + selectedImage} alt="foto principal" />
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
            <img src={API_URL + img} alt={`foto ${index}`} />
          </label>
        ))}
      </div>
    </div>
  );
}

export default ImageShow;
