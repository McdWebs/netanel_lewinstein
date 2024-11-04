import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import CarouselImages from "../helpers/CarouselImages";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
// import FeedbackList from "./FeedbackList";
import Collections from "./Collections";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "../../styles/style.module.css";
// import Contact from "./Contact";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AccessibilityMenu />
      <CarouselImages />
      <Collections />
      <div className={styles.buttonContainer}>
        <Button
          style={{ fontSize: "18px", border: "1px solid #0072ff" }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/works")}
        >
          לגלריית התמונות
        </Button>
      </div>
      {/* <FeedbackList /> */}
      {/* <Contact /> */} {/* waiting for twilio */}
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
