import React from "react";
import "./Director.scss";
import uzin from "../../../assets/uzinfocom.png";
import icon1 from "../../../assets/director1.png";
import icon2 from "../../../assets/director2.png";
import icon3 from "../../../assets/director3.png";
import profile from "../../../assets/director.png";

const Director = () => {
  return (
    <div className="director">
      <div className="director__wrapper">
        <div className="director__left">
          <img src={uzin} loading="lazy" alt="" className="director__img" />
          <h1 className="director__title">
            Biz jamiyat va sheriklarimizga o'z maqsadlariga erishishda yordam
            beradigan, qulaylikni ta'minlaydigan va hayotni yangi imkoniyatlar
            bilan to'ldiradigan noyob IT - yechimlarini yaratamiz!
          </h1>
          <div className="director__profile">
            <img src={profile} alt="" className="director__logo" />
            <div className="director__desc">
              <h4 className="director__name">Gimranov Emil Ildarovich</h4>
              <div className="director__text">Bosh direktor</div>
            </div>
          </div>
        </div>
        <div className="director__cards">
          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">Boshqaruv</h2>
              <img
                src={icon1}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">Adolatli korporativ boshqaruv</p>
          </div>
          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">Natijalar</h2>
              <img
                src={icon2}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">
              Yaxshi natijalarga erishishga yo'naltirish
            </p>
          </div>
          <div className="director__card">
            <div className="director__top">
              <h2 className="director__cardtitle">Jamoa</h2>
              <img
                src={icon3}
                loading="lazy"
                alt=""
                className="director__icon"
              />
            </div>
            <p className="director__cardtext">
              Jamoaning yuqori darajadagi professionalligi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
