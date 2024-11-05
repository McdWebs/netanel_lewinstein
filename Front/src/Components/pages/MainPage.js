import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import HeroImages from "../helpers/HeroImages";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
// import FeedbackList from "./FeedbackList";
import Collections from "./Collections";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "../../styles/style.module.css";
import Contact from "./Contact";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AccessibilityMenu />
      <HeroImages />
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
      <Contact />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
