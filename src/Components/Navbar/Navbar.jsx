import React, { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-list.png";
import arrow from "../../assets/arrowdown.png";
import burger from "../../assets/burger.png";
import close from "../../assets/close.png";
import { getText } from "../../i18n";
import "./Navbar.scss";
import Loader from "../UI/loader/Loader";

const Navbar = () => {
  const { lang } = useParams();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
            <h3 className="navbar__title">USTUDY BY UZINFOCOM</h3>
          </NavLink>
          <div className={`navbar__links ${menuOpen ? "show" : ""}`}>
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
                <NavLink className={"navbar__link"} to={`/${lang}#address`}>
                  {getText(lang, "contact")}
                </NavLink>
              </li>
            </ul>
            <div className="navbar__langcourses">
              <ul className="navbar__lang">
                <li className="navbar__list">
                  <button
                    className={`navbar__langlink ${
                      lang === "uzb" ? "navbar__langlink--active" : ""
                    }`}
                    onClick={() => changeLanguage("uzb")}
                  >
                    UZB
                  </button>
                </li>
                <li className="navbar__list">
                  <button
                    className={`navbar__langlink ${
                      lang === "china" ? "navbar__langlink--active" : ""
                    }`}
                    onClick={() => changeLanguage("china")}
                  >
                    中国人
                  </button>
                </li>
                <li className="navbar__list">
                  <button
                    className={`navbar__langlink ${
                      lang === "turk" ? "navbar__langlink--active" : ""
                    }`}
                    onClick={() => changeLanguage("turk")}
                  >
                    TÜRK
                  </button>
                </li>
                <li className="navbar__list">
                  <button
                    className={`navbar__langlink ${
                      lang === "eng" ? "navbar__langlink--active" : ""
                    }`}
                    onClick={() => changeLanguage("eng")}
                  >
                    ENG
                  </button>
                </li>
              </ul>
              <button className="navbar__courses" onClick={handleShow}>
                <img
                  src={menu}
                  loading="lazy"
                  alt=""
                  className="navbar__icon"
                />
                {getText(lang, "allcourse")}
                <img
                  src={arrow}
                  loading="lazy"
                  alt=""
                  className="navbar__icon"
                />
              </button>
              {show ? (
                <ul className="navbar__dropdown">
                  <li className="navbar__dropdownlist">
                    <NavLink
                      className="navbar__dropdownlink"
                      to={`/${lang}/course1`}
                      onClick={handleShow}
                    >
                      {getText(lang, "course1.name")}
                    </NavLink>
                  </li>
                  <li className="navbar__dropdownlist">
                    <NavLink
                      className="navbar__dropdownlink"
                      to={`/${lang}/course2`}
                      onClick={handleShow}
                    >
                      {getText(lang, "course2.name")}
                    </NavLink>
                  </li>
                  <li className="navbar__dropdownlist">
                    <NavLink
                      className="navbar__dropdownlink"
                      to={`/${lang}/course3`}
                      onClick={handleShow}
                    >
                      {getText(lang, "course3.name")}
                    </NavLink>
                  </li>
                  <li className="navbar__dropdownlist">
                    <NavLink
                      className="navbar__dropdownlink"
                      to={`/${lang}/course4`}
                      onClick={handleShow}
                    >
                      {getText(lang, "course4.name")}
                    </NavLink>
                  </li>
                  <li className="navbar__dropdownlist">
                    <NavLink
                      className="navbar__dropdownlink"
                      to={`/${lang}/course5`}
                      onClick={handleShow}
                    >
                      {getText(lang, "course5.name")}
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          {menuOpen ? (
            <img onClick={handleMenu} src={close} className="navbar__burger" />
          ) : (
            <img onClick={handleMenu} src={burger} className="navbar__burger" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
