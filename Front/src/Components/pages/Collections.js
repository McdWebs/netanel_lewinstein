import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/style.module.css";
import { IMAGELIST } from "../../consts/SubjectsList";

const CarouselComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = (theme) => {
    navigate(`/collections/${encodeURIComponent(theme)}`);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.rotatingCarousel}>
        {IMAGELIST.map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ "--i": index }}
            onClick={() => handleNavigate(image.label)}
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
