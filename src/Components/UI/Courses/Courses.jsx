import React, { useMemo, useCallback, memo } from "react";
import "./Courses.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useParams } from "react-router-dom";
import { getText } from "../../../i18n";

import course1 from "../../../assets/intro1.jpeg";
import course2 from "../../../assets/intro2.png";
import course3 from "../../../assets/intro3.png";
import course4 from "../../../assets/course4.jpeg";
import course5 from "../../../assets/course5.jpeg";
import date from "../../../assets/calendar.png";

const Courses = () => {
  const { lang } = useParams();

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1325,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }),
    []
  );

  const translate = useCallback((key) => getText(lang, key), [lang]);

  const courses = useMemo(
    () => [
      {
        id: 1,
        image: course1,
        duration: "5 oy",
        title: translate("frontendTitle"),
        description: translate("frontendDesc"),
        price: "2 000 000 / oy",
      },
      {
        id: 2,
        image: course2,
        duration: "2 oy",
        title: translate("cyberTitle"),
        description: translate("cyberDesc"),
        price: "2 000 000 / oy",
      },
      {
        id: 3,
        image: course3,
        duration: "5 oy",
        title: translate("motionTitle"),
        description: translate("motionDesc"),
        price: "2 500 000 / oy",
      },
      {
        id: 4,
        image: course4,
        duration: "4 oy",
        title: translate("graphicTitle"),
        description: translate("graphicDesc"),
        price: "2 000 000 / oy",
      },
      {
        id: 5,
        image: course5,
        duration: "6 oy",
        title: translate("backendTitle"),
        description: translate("backendDesc"),
        price: "1 500 000 / oy",
      },
    ],
    [translate]
  );

  return (
    <div className="courses" id="course">
      <div className="courses__wrapper">
        <h1 className="courses__title">{translate("ourCourses")}</h1>
        <Slider className="courses__cards" {...settings}>
          {courses.map((course) => (
            <NavLink
              key={course.id}
              draggable="false"
              to={`/${lang}/course${course.id}`}
              className="courses__card"
            >
              <div className="courses__top">
                <img
                  src={course.image}
                  loading="lazy"
                  className="courses__img"
                  alt={course.title}
                />
                <div className="courses__date">
                  <img src={date} alt="calendar" className="courses__icon" />
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="courses__desc">
                <h2 className="courses__cardtitle">{course.title}</h2>
                <p className="courses__text">{course.description}</p>
              </div>
              <div className="courses__bottom">
                <p className="courses__price">{course.price}</p>
                <div className="courses__link">
                  <p>{translate("moreInfo")}</p>
                  <span className="courses__arrow">→</span>
                </div>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default memo(Courses);
