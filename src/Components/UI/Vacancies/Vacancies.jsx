import React from "react";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import "./Vacancies.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../assets/developer.png";
import briefcase from "../../../assets/brifecase2.png";

const Vacancies = () => {
  const { lang } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="vacancies">
      <div className="vacancies__wrapper">
        <div className="vacancies__desc">
          <h1 className="vacancies__title">
            {getText(lang, "vacanciesTitle")}
          </h1>
          <p className="vacancies__text">
            {getText(lang, "vacanciesCount")} – 4
          </p>
        </div>
        <Slider
          className="vacancies__cards"
          {...settings}
          key={JSON.stringify(settings)}
        >
          {[
            { title: "designer", salary: "6 515 151" },
            { title: "seniorDeveloper", salary: "1 200 000" },
            { title: "middleDeveloper", salary: "600 000" },
            { title: "juniorDeveloper", salary: "2 500 000" },
          ].map((vacancy, index) => (
            <div key={index} className="vacancies__card">
              <img
                src={logo}
                loading="lazy"
                alt=""
                className="vacancies__logo"
              />
              <h3 className="vacancies__title">
                {getText(lang, vacancy.title)}
              </h3>
              <div className="vacancies__course">
                <img
                  src={briefcase}
                  loading="lazy"
                  alt=""
                  className="vacancies__icon"
                />
                <p>{getText(lang, "afterCourse")}</p>
              </div>
              <p className="vacancies__price">{vacancy.salary}</p>
              <div className="vacancies__talablar">
                <div className="vacancies__talab">
                  {getText(lang, "permanentJob")}
                </div>
                <div className="vacancies__talab">
                  {getText(lang, "marketing")}
                </div>
                <div className="vacancies__talab">
                  {getText(lang, "design")}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Vacancies;
