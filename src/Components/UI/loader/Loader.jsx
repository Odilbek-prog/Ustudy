import React from "react";
import "./loader.scss";
import Lottie from "lottie-react";
import animationData from "./loader.json";

const Loader = () => {
  return (
    <div className="loader">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="loader__animation" 
      />
    </div>
  );
};

export default Loader;
