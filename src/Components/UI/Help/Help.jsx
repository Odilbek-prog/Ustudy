import React from "react";
import "./Help.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import flag from "../../../assets/flag.png";
import help from "../../../assets/help.png";

const Help = () => {
  const { lang } = useParams();

  return (
    <div className="help" id="help">
      <div className="help__wrapper">
        <div className="help__left">
          <div className="help__titles">
            <h1 className="help__title">{getText(lang, "help_title")}</h1>
            <h1 className="help__titlegreen">
              {getText(lang, "help_titlegreen")}
            </h1>
          </div>
          <p className="help__text">{getText(lang, "help_desc")}</p>
          <h3 className="help__text">{getText(lang, "help_contact")}</h3>
          <form className="help__form">
            <input
              type="text"
              placeholder={getText(lang, "help_name_placeholder")}
              className="help__input"
            />
            <div className="help__phone">
              <img src={flag} alt="flag" />
              <span>+998</span>
              <input
                type="text"
                placeholder={getText(lang, "help_phone_placeholder")}
                pattern="\d{9}"
                className="help__phone-input"
              />
            </div>
            <div className="help__bottom">
              <button type="submit" className="help__btn">
                {getText(lang, "help_submit")}
              </button>
              <p>
                {getText(lang, "help_terms")}{" "}
                <NavLink style={{ color: "rgb(114, 153, 237)" }}>
                  {getText(lang, "help_privacy_policy")}
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
        <img src={help} loading="lazy" alt="help" className="help__img" />
      </div>
    </div>
  );
};

export default Help;
