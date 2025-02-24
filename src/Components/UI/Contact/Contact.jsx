import React, { memo } from "react";
import "./Contact.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import flag from "../../../assets/flag.png";

const Contact = () => {
  const { lang } = useParams();

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__desc">
          <div className="contact__titles">
            <h1 className="contact__title">{getText(lang, "helpChoose")} </h1>
            <h1 className="contact__titlegreen">
              {getText(lang, "relevantCourse")}
            </h1>
          </div>
          <p className="contact__text">{getText(lang, "helpChooseDesc")}</p>
        </div>
        <div className="contact__right">
          <h3 className="contact__righttitle">
            {getText(lang, "yourContact")}
          </h3>
          <form className="contact__form">
            <input
              type="text"
              placeholder={getText(lang, "yourName")}
              className="contact__input"
            />
            <div
              className="contact__input"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={flag} alt="" />
              <span style={{ marginLeft: "5px" }}>+998</span>
              <input
                type="number"
                placeholder={getText(lang, "yourPhone")}
                maxLength={9}
                className="contact__inp"
                style={{ marginLeft: "5px" }}
              />
            </div>
            <div className="contact__bottom">
              <button type="submit" className="contact__btn">
                {getText(lang, "submitRequest")}
              </button>
              <p>
                {getText(lang, "privacyAgreement")}{" "}
                <NavLink style={{ color: "rgb(114, 153, 237)" }}>
                  {getText(lang, "privacyPolicy")}
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
