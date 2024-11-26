import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/style.module.css";
import { COLLECTION_LIST, CAROUSEL_LIST } from "../../consts/SubjectsList";

import { Carousel } from "react-responsive-carousel";

const CarouselCollections = () => {
  const navigate = useNavigate();

  return (
    <div>
      {COLLECTION_LIST.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselBlock} ${
            index % 2 === 0 ? styles.curveRight : styles.curveLeft
          }`}
        >
          <div className={styles.placeholder}></div>
          {index === 0 ? (
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              // infiniteLoop={true}
              autoPlay={true}
              transitionTime={1000}
              animationHandler={"fade"}
              className={styles.imageWrapper}
            >
              {CAROUSEL_LIST.map((item, index) => (
                <img key={index} src={item.image} alt={item.label} />
              ))}
            </Carousel>
          ) : (
            <>
              <div className={styles.imageWrapper}>
                <img
                  src={image.image}
                  alt={`${image.label} Theme`}
                  onClick={() => {
                    navigate(`/collections/${image.label}`);
                  }}
                />
                <div
                  className={`${styles.textWrapper} ${
                    index % 2 === 0 ? styles.textRight : styles.textLeft
                  }`}
                >
                  <h2 className={styles.collectionTitle}>{image.label}</h2>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarouselCollections;
