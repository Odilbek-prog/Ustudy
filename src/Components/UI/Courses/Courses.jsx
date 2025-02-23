import React, { useMemo, useCallback, memo } from "react";
import "./Courses.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import course1 from "../../../assets/intro1.jpeg";
import course2 from "../../../assets/intro2.png";
import course3 from "../../../assets/intro3.png";
import course4 from "../../../assets/course4.jpeg";
import course5 from "../../../assets/course5.jpeg";
import date from "../../../assets/calendar.png";
import { NavLink, useParams } from "react-router";

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
          breakpoint: 1024,
          settings: { slidesToShow: 2, slidesToScroll: 2 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    }),
    []
  );

  const courses = useMemo(
    () => [
      {
        id: 1,
        title: "Front-end dasturlash",
        duration: "5 oy",
        price: "2 000 000 / oy",
        img: course1,
      },
      {
        id: 2,
        title: "Kiberxavfsizlikka kirish",
        duration: "2 oy",
        price: "2 000 000 / oy",
        img: course2,
      },
      {
        id: 3,
        title: "Motion dizayn",
        duration: "5 oy",
        price: "2 500 000 / oy",
        img: course3,
      },
      {
        id: 4,
        title: "Grafik dizayn",
        duration: "4 oy",
        price: "2 000 000 / oy",
        img: course4,
      },
      {
        id: 5,
        title: "Pythonda Back-end...",
        duration: "6 oy",
        price: "1 500 000 / oy",
        img: course5,
      },
    ],
    []
  );

  const renderCourseCard = useCallback(
    ({ id, title, duration, price, img }) => (
      <NavLink
        key={id}
        draggable="false"
        to={`/${lang}/courses/${id}`}
        className="courses__card"
      >
        <div className="courses__top">
          <img src={img} loading="lazy" className="courses__img" alt={title} />
          <div className="courses__date">
            <img src={date} alt="calendar" className="courses__icon" />
            <p>{duration}</p>
          </div>
        </div>
        <div className="courses__desc">
          <h2 className="courses__cardtitle">{title}</h2>
          <p className="courses__text">Kurs haqida batafsil ma'lumot...</p>
        </div>
        <div className="courses__bottom">
          <p className="courses__price">{price}</p>
          <div className="courses__link">
            <p>Batafsil</p>
            <span className="courses__arrow">→</span>
          </div>
        </div>
      </NavLink>
    ),
    [lang]
  );

  return (
    <div className="courses" id="course">
      <div className="courses__wrapper">
        <h1 className="courses__title">Bizning kurslarimiz</h1>
        <Slider className="courses__cards" {...settings}>
          {courses.map(renderCourseCard)}
        </Slider>
      </div>
    </div>
  );
};

export default memo(Courses);
