import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/style.module.css";
import { COLLECTION_LIST } from "../../consts/SubjectsList";

const CarouselCollections = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.carouselSection}>
      {COLLECTION_LIST.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselBlock} ${
            index % 2 === 0 ? styles.curveRight : styles.curveLeft
          }`}
        >
          <div className={styles.imageWrapper}>
            <img
              src={image.image}
              alt={`${image.label} Theme`}
              className={styles.carouselImage}
              onClick={() => navigate(`/collections/${image.label}`)}
            />
            <div className={`${styles.textWrapper} ${index % 2 === 0 ? styles.textRight : styles.textLeft}`}>
              <h2 className={styles.collectionTitle}>{image.label}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselCollections;
