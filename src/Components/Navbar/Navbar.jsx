import React, { useEffect } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-list.png";
import arrow from "../../assets/arrowdown.png";
import { getText } from "../../i18n";
import "./Navbar.scss";

const Navbar = () => {
  const { lang } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <NavLink className={"navbar__logo"} to={`/${lang}`}>
          <img src={logo} loading="lazy" alt="" className="navbar__img" />
          <hr className="navbar__hr" />
          <h3 className="navbar__title">USTUDY BY UZINFOCOM</h3>
        </NavLink>
        <ul className="navbar__menu">
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={`/${lang}#course`}>
              {getText(lang, "course")}
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={`/${lang}#help`}>
              {getText(lang, "help")}
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={`/${lang}#contact`}>
              {getText(lang, "contact")}
            </NavLink>
          </li>
        </ul>
        <div className="navbar__langcourses">
          <ul className="navbar__lang">
            <li className="navbar__list">
              <NavLink className={"navbar__langlink"} to={`/uzb`}>
                UZB
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink className={"navbar__langlink"} to={`/china`}>
                中国人
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink className={"navbar__langlink"} to={`/turk`}>
                TÜRK
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink className={"navbar__langlink"} to={`/eng`}>
                ENG
              </NavLink>
            </li>
          </ul>
          <button className="navbar__courses">
            <img src={menu} loading="lazy" alt="" className="navbar__icon" />
            {getText(lang, "allcourse")}
            <img src={arrow} loading="lazy" alt="" className="navbar__icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
