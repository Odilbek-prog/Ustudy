import React from "react";
import "./Vacancies.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../assets/developer.png";
import briefcase from "../../../assets/brifecase2.png";

const Vacancies = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="vacancies">
      <div className="vacancies__wrapper">
        <div className="vacancies__desc">
          <h1 className="vacancies__title">
            O'zbekistonda dasturchilarga talab
          </h1>
          <p className="vacancies__text">
            Ishlab chiquvchi vakansiyalari soni – 4
          </p>
        </div>
        <Slider className="vacancies__cards" {...settings}>
          <div className="vacancies__card">
            <img src={logo} loading="lazy" alt="" className="vacancies__logo" />
            <h3 className="vacancies__title">Dizayner</h3>
            <div className="vacancies__course">
              <img
                src={briefcase}
                loading="lazy"
                alt=""
                className="vacancies__icon"
              />
              <p>Kursdan keyin</p>
            </div>
            <p className="vacancies__price">6 515 151</p>
            <div className="vacancies__talablar">
              <div className="vacancies__talab">Doimiy ish</div>
              <div className="vacancies__talab">Marketing</div>
              <div className="vacancies__talab">Design</div>
            </div>
          </div>
          <div className="vacancies__card">
            <img src={logo} loading="lazy" alt="" className="vacancies__logo" />
            <h3 className="vacancies__title">Senior-разработчик</h3>
            <div className="vacancies__course">
              <img
                src={briefcase}
                loading="lazy"
                alt=""
                className="vacancies__icon"
              />
              <p>Kursdan keyin</p>
            </div>
            <p className="vacancies__price">1 200 000</p>
            <div className="vacancies__talablar">
              <div className="vacancies__talab">Doimiy ish</div>
              <div className="vacancies__talab">Marketing</div>
              <div className="vacancies__talab">Design</div>
            </div>
          </div>
          <div className="vacancies__card">
            <img src={logo} loading="lazy" alt="" className="vacancies__logo" />
            <h3 className="vacancies__title">Middle-разработчик</h3>
            <div className="vacancies__course">
              <img
                src={briefcase}
                loading="lazy"
                alt=""
                className="vacancies__icon"
              />
              <p>Kursdan keyin</p>
            </div>
            <p className="vacancies__price">600 000</p>
            <div className="vacancies__talablar">
              <div className="vacancies__talab">Doimiy ish</div>
              <div className="vacancies__talab">Marketing</div>
              <div className="vacancies__talab">Design</div>
            </div>
          </div>
          <div className="vacancies__card">
            <img src={logo} loading="lazy" alt="" className="vacancies__logo" />
            <h3 className="vacancies__title">Junior-разработчик</h3>
            <div className="vacancies__course">
              <img
                src={briefcase}
                loading="lazy"
                alt=""
                className="vacancies__icon"
              />
              <p>Kursdan keyin</p>
            </div>
            <p className="vacancies__price">2 500 000</p>
            <div className="vacancies__talablar">
              <div className="vacancies__talab">Doimiy ish</div>
              <div className="vacancies__talab">Marketing</div>
              <div className="vacancies__talab">Design</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Vacancies;
