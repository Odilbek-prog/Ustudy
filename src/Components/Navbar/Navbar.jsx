import React, { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-list.png";
import arrow from "../../assets/arrowdown.png";
import { getText } from "../../i18n";
import "./Navbar.scss";
import Loader from "../UI/loader/Loader";

const Navbar = () => {
  const { lang } = useParams();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // menu dropdown
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scroll to section when link clicked
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // change language
  const changeLanguage = (newLang) => {
    if (newLang !== lang) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.href = `/${newLang}`;
        setIsLoading(false);
      }, 1200);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={`navbar ${isScrolled ? "navbar--fixed" : ""}`}>
        <div className="navbar__wrapper">
          <NavLink className={"navbar__logo"} to={`/${lang}`}>
            <img src={logo} loading="lazy" alt="" className="navbar__img" />
            <hr className="navbar__hr" />
            <h3 className="navbar__title">USTUDY BY TSOUS</h3>
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
                <button
                  className="navbar__langlink"
                  onClick={() => changeLanguage("uzb")}
                >
                  UZB
                </button>
              </li>
              <li className="navbar__list">
                <button
                  className="navbar__langlink"
                  onClick={() => changeLanguage("china")}
                >
                  中国人
                </button>
              </li>
              <li className="navbar__list">
                <button
                  className="navbar__langlink"
                  onClick={() => changeLanguage("turk")}
                >
                  TÜRK
                </button>
              </li>
              <li className="navbar__list">
                <button
                  className="navbar__langlink"
                  onClick={() => changeLanguage("eng")}
                >
                  ENG
                </button>
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
    </>
  );
};

export default Navbar;
