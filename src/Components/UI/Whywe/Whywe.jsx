import React from "react";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import "./Whywe.scss";
import like from "../../../assets/like.png";
import student from "../../../assets/student.png";
import comp from "../../../assets/comp.png";
import heart from "../../../assets/heart.png";
import file from "../../../assets/file.png";
import briefcase from "../../../assets/briefcase3.png";

const Whywe = () => {
  const { lang } = useParams();

  const cards = [
    {
      icon: like,
      title: "actualKnowledge",
      text: "actualKnowledgeText",
    },
    {
      icon: student,
      title: "community",
      text: "communityText",
    },
    {
      icon: briefcase,
      title: "convenientLearning",
      text: "convenientLearningText",
    },
    {
      icon: comp,
      title: "careerGuidance",
      text: "careerGuidanceText",
    },
    {
      icon: heart,
      title: "employment",
      text: "employmentText",
    },
    {
      icon: file,
      title: "softSkills",
      text: "softSkillsText",
    },
  ];

  return (
    <div className="whywe">
      <div className="whywe__wrapper">
        <div className="whywe__titles">
          <h1 className="whywe__title">{getText(lang, "whyChoose")}</h1>
          <h1 className="whywe__titlegreen">{getText(lang, "us")}</h1>
        </div>
        <div className="whywe__cards">
          {cards.map((card, index) => (
            <div key={index} className="whywe__card">
              <img
                src={card.icon}
                loading="lazy"
                alt=""
                className="whywe__icon"
              />
              <h2 className="whywe__cardtitle">{getText(lang, card.title)}</h2>
              <p className="whywe__text">{getText(lang, card.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whywe;
