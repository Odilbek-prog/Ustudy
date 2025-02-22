import React from "react";
import { useParams } from "react-router-dom";
import { getText } from "../i18n";

const AboutComponent = () => {
  const { lang } = useParams();

  return <div>about</div>;
};

export default AboutComponent;
