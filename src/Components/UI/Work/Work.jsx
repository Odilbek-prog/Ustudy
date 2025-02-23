import React from "react";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import mission from "../../../assets/mission.jpeg";
import check from "../../../assets/check.png";
import "./Work.scss";

const Work = () => {
  const { lang } = useParams();

  const values = [
    "opennessToInnovation",
    "creativity",
    "competitiveness",
    "efficiencyAndProfessionalism",
  ];

  return (
    <div className="work">
      <div className="work__wrapper">
        <img src={mission} loading="lazy" alt="" className="work__img" />
        <div className="work__right">
          <h1 className="work__title">{getText(lang, "ourMission")}</h1>
          <p className="work__text">{getText(lang, "missionText")}</p>
          <div className="work__bottom">
            <p className="work__text">{getText(lang, "ourValues")}</p>
            <div className="work__values">
              {values.map((value, index) => (
                <div key={index} className="work__value">
                  <img src={check} alt="check" className="work__check" />
                  <p className="work__text">{getText(lang, value)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
