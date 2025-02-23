import React from "react";
import "./Contact.scss";
import { NavLink } from "react-router-dom";
import flag from "../../../assets/flag.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="contact__desc">
          <div className="contact__titles">
            <h1 className="contact__title">
              Biz sizga tanlashda yordam beramiz
            </h1>
            <h1 className="contact__titlegreen"> tegishli kurs!</h1>
          </div>
          <p className="contact__text">
            Biz sizga to'g'ri kursni tanlashda yordam beramiz!
          </p>
        </div>
        <div className="contact__right">
          <h3 className="contact__righttitle">Sizning kontaktingiz:</h3>
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
      </div>
    </div>
  );
};

export default Contact;
