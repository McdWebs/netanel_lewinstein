import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import HeroImages from "../helpers/HeroImages";
import SocialNetworks from "../helpers/SocialNetworks";
import CarouselCollections from "./CarouselCollections";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "../../styles/style.module.css";
import Contact from "./Contact";
import Description from "../helpers/Description";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroImages />
      <Description />
      <CarouselCollections />
      <div className={styles.buttonContainer}>
        <Button
          style={{ fontSize: "18px", border: "1px solid #0072ff" }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/works")}
        >
          לגלריית התמונות
        </Button>
      </div>
      <Contact />
      <SocialNetworks />
    </div>
  );
};

export default Home;
