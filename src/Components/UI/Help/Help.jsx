import React from "react";
import "./Help.scss";
import { NavLink } from "react-router-dom";
import flag from "../../../assets/flag.png";
import help from "../../../assets/help.png";

const Help = () => {
  return (
    <div className="help" id="help">
      <div className="help__wrapper">
        <div className="help__left">
          <div className="help__titles">
            <h1 className="help__title">Biz sizning </h1>
            <h1 className="help__titlegreen">
              qiziqishlaringiz va maqsadlaringiz asosida siz uchun mukammal
              kursni tanlaymiz!
            </h1>
          </div>
          <p className="help__text">
            Biz sizga to'g'ri kursni tanlashda yordam beramiz!
          </p>
          <h3 className="help__text">Sizning kontaktingiz:</h3>
          <form className="contact__form">
            <input
              type="text"
              placeholder="Ismingiz..."
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
                placeholder="Telefon raqamingiz"
                maxLength={9}
                className="contact__inp"
                style={{ marginLeft: "5px" }}
              />
            </div>
            <div className="contact__bottom">
              <button type="submit" className="contact__btn">
                Murojaat yuborish
              </button>
              <p>
                Ro'yxatdan o'tish orqali siz o'qiganingizni va rozi
                ekanligingizni tasdiqlaysiz{" "}
                <NavLink style={{ color: "rgb(114, 153, 237)" }}>
                  Maxfiylik Siyosati
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
        <img src={help} loading="lazy" alt="" className="help__img" />
      </div>
    </div>
  );
};

export default Help;
