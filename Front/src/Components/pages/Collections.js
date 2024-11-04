import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import styles from "../../styles/style.module.css";
import { IMAGELIST } from "../../consts/SubjectsList";

const CarouselCollections = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items = carouselRef.current.children;
    const totalItems = items.length;
    const angle = 360 / totalItems;
    const radius = 140;

    Array.from(items).forEach((item, index) => {
      const rotation = angle * index;
      const x = radius * Math.cos((rotation * Math.PI) / 180);
      const y = radius * Math.sin((rotation * Math.PI) / 180);

      gsap.set(item, {
        x,
        y,
        rotation: -rotation,
      });
    });

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

    tl.to(carouselRef.current, {
      rotation: 360,
      duration: 30,
      onUpdate: () => {
        Array.from(items).forEach((item, index) => {
          const currentRotation = gsap.getProperty(
            carouselRef.current,
            "rotation"
          );
          const itemRotation = currentRotation - angle * index;
          gsap.set(item, { rotation: -itemRotation });
          const legend = item.children[1];
          gsap.set(legend, { rotation: 0 });
        });
      },
    });
  }, [carouselRef]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.rotatingCarousel} ref={carouselRef}>
        {IMAGELIST.map((image) => (
          <div key={image.id} className={styles.carouselItem}>
            <img
              src={image.image}
              alt={`${image.label} Theme`}
              className={styles.carouselImage}
              onClick={() => navigate(`/collections/${image.id}`)}
            />
            <p className={styles.legend}>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCollections;
