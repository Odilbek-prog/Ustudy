import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { NavLink, useParams } from "react-router-dom";
import email from "../../assets/footemail.png";
import tel from "../../assets/foottel.png";
import { getText } from "../../i18n";

const Footer = () => {
  const { lang } = useParams();
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src={logo} loading="lazy" alt="" className="footer__img" />
          <p className="footer__text">
            Copyright © 2024 Uzinfocom. All Rights Reserved.
          </p>
        </div>
        <ul className="footer__menu">
          {getText(lang, "menu")}
          <li className="footer__list">
            <NavLink className={"footer__link"} to={`/${lang}`}>
              {getText(lang, "course")}
            </NavLink>
          </li>
          <li className="footer__list">
            <NavLink className={"footer__link"} to={`/${lang}#help`}>
              {getText(lang, "help")}
            </NavLink>
          </li>
          <li className="footer__list">
            <NavLink className={"footer__link"} to={`/${lang}#contact`}>
              {getText(lang, "contact")}
            </NavLink>
          </li>
        </ul>
        <div className="footer__social">
          {getText(lang, "sociallinks")}
          <div className="footer__icons">
            <NavLink className="footer__icon" to={"https://twitter.com"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#551bac"
                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                />
              </svg>
            </NavLink>
            <NavLink className="footer__icon" to={"https://telegram.com"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256">
                <g
                  fill="#551b7d"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth={1}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray=""
                  strokeDashoffset={0}
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" />
                  </g>
                </g>
              </svg>
            </NavLink>
            <NavLink className="footer__icon" to={"https://youtube.com"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={20}
                height={20}
                viewBox="0,0,256,256"
              >
                <g
                  fill="#551b7d"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth={1}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray=""
                  strokeDashoffset={0}
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z" />
                  </g>
                </g>
              </svg>
            </NavLink>
            <NavLink className="footer__icon" to={"https://facebook.com"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={20}
                height={20}
                viewBox="0,0,256,256"
              >
                <g
                  fill="#551b7d"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth={1}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray=""
                  strokeDashoffset={0}
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M32,11h5c0.552,0 1,-0.448 1,-1v-6.737c0,-0.524 -0.403,-0.96 -0.925,-0.997c-1.591,-0.113 -4.699,-0.266 -6.934,-0.266c-6.141,0 -10.141,3.68 -10.141,10.368v6.632h-7c-0.552,0 -1,0.448 -1,1v7c0,0.552 0.448,1 1,1h7v19c0,0.552 0.448,1 1,1h7c0.552,0 1,-0.448 1,-1v-19h7.222c0.51,0 0.938,-0.383 0.994,-0.89l0.778,-7c0.066,-0.592 -0.398,-1.11 -0.994,-1.11h-8v-5c0,-1.657 1.343,-3 3,-3z" />
                  </g>
                </g>
              </svg>
            </NavLink>
          </div>

          <div className="footer__cont">
            <div className="footer__email">
              <img src={email} loading="lazy" alt="" />
              <NavLink className={"footer__link"} to={"mailto:info@ustudy.uz"}>
                info@ustudy.uz
              </NavLink>
            </div>
            <div className="footer__tel">
              <img src={tel} loading="lazy" alt="" />
              <NavLink className={"footer__link"} to={"tel:+998555015353"}>
                +998(55) 501-5353
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
