import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image2 from "../../assets/images/protraits/protrait-1.jpg";
import image3 from "../../assets/images/protraits/protrait-2.jpg";

const HeroImages = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
    >
      {itemData.map((item, index) => (
        <div key={item.img}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "500px", objectFit: "cover", objectPosition: index === 0 ? "0 25%" : "0 45%" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

const itemData = [
  {
    img: image2,
    title: "protrait",
  },
  {
    img: image3,
    title: "protrait",
  },
];

export default HeroImages;
