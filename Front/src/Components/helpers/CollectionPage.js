import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/style.module.css";
import { IMAGELIST } from "../../consts/SubjectsList";

const CollectionPage = () => {
  const { theme } = useParams();
  const collectionImages =
    IMAGELIST.find((item) => item.label === theme)?.images || [];

  return (
    <div className={styles.collectionContainer}>
      <h2>{theme} Collection</h2>
      <div className={styles.imageGrid}>
        {collectionImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${theme} ${index}`}
            className={styles.collectionImage}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
