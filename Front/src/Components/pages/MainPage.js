import React from "react";
import CarouselImages from "../helpers/CarouselImages";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
import FeedbackList from "./FeedbackList";
import Works from "./Works";
import Collections from "./Collections";

const MainPage = () => {
  return (
    <div>
      <AccessibilityMenu />
      <CarouselImages />
      <Collections />
      <Works />
      <FeedbackList />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
