import React from "react";
import styles from "../../styles/style.module.css";
import { IMAGELIST } from "../../consts/SubjectsList";

const CarouselComponent = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.rotatingCarousel}>
        {IMAGELIST.map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ "--i": index }}
          >
            <img
              src={image.image}
              alt={`${image.label} Theme`}
              className={styles.carouselImage}
            />
            <p className={styles.legend}>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;