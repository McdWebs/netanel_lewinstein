import React from "react";
import { IMAGELIST } from "../../consts/SubjectsList";
import styles from "../../styles/style.module.css";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className={styles.title}>גלריית התמונות</p>
      <div className={styles.workContainer}>
        <div className={styles.cardContainer}>
          {IMAGELIST.map((image) => (
            <div
              key={image.id}
              className={styles.card}
              onClick={() => navigate(`/collections/${image.id}`)}
            >
              <div className={styles.imageContainer}>
                <img
                  src={image.image}
                  alt={image.label}
                  className={styles.image}
                />
                <div className={styles.labelOverlay}>{image.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
