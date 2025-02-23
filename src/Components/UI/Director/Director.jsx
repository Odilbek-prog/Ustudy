import React from "react";
import "./Director.scss";
import uzin from "../../../assets/uzinfocom.png";
import icon1 from "../../../assets/director1.png";
import icon2 from "../../../assets/director2.png";
import icon3 from "../../../assets/director3.png";
import profile from "../../../assets/director.png";
import { getText } from "../../../i18n";
import { useParams } from "react-router";

const Director = () => {
  const { lang } = useParams(); // URL dan tilni olish

  return (
    <div className="director">
      <div className="director__wrapper">
        <div className="director__left">
          <img src={uzin} loading="lazy" alt="" className="director__img" />
          <h1 className="director__title">{getText(lang, "directorTitle")}</h1>
          <div className="director__profile">
            <img src={profile} alt="" className="director__logo" />
            <div className="director__desc">
              <h4 className="director__name">
                {getText(lang, "directorName")}
              </h4>
              <div className="director__text">
                {getText(lang, "directorPosition")}
              </div>
            </div>
          </div>
        </div>

        <div className="director__cards">
          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">
                {getText(lang, "management")}
              </h2>
              <img
                src={icon1}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">
              {getText(lang, "managementDesc")}
            </p>
          </div>

          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">
                {getText(lang, "results")}
              </h2>
              <img
                src={icon2}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">{getText(lang, "resultsDesc")}</p>
          </div>

          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">{getText(lang, "team")}</h2>
              <img
                src={icon3}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">{getText(lang, "teamDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
