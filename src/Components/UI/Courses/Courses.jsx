import React from "react";
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="courses" id="courses">
      <div className="courses__wrapper">
        <h1 className="courses__title">Bizning kurslarimiz</h1>
        <Slider className="courses__cards" {...settings}>
          <NavLink
            draggable="false"
            to={`/${lang}/courses/1`}
            className="courses__card"
          >
            <div className="courses__top">
              <img src={course1} loading="lazy" className="courses__img" />
              <div className="courses__date">
                <img src={date} alt="" className="courses__icon" />
                <p> 5 oy</p>
              </div>
            </div>
            <div className="courses__desc">
              <h2 className="courses__cardtitle">Front-end dasturlash</h2>
              <p className="courses__text">
                <b>Frontend dasturlash</b> - bu dinamik va interaktiv
                veb-sahifalarni yaratishni o'zlashtirish uchun mo'ljallangan
                intensiv va amaliyotga yo'naltirilgan kursdir. Kurs HTML va CSS
                dan zamonaviy...
              </p>
            </div>
            <div className="courses__bottom">
              <p className="courses__price">2 000 000 / oy</p>
              <div className="courses__link">
                <p>Batafsil</p>
                <span className="courses__arrow">→</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            draggable="false"
            to={`/${lang}/courses/2`}
            className="courses__card"
          >
            <div className="courses__top">
              <img src={course2} loading="lazy" className="courses__img" />
              <div className="courses__date">
                <img src={date} alt="" className="courses__icon" />
                <p> 2 oy</p>
              </div>
            </div>
            <div className="courses__desc">
              <h2 className="courses__cardtitle">Kiberxavfsizlikka kirish</h2>
              <p className="courses__text">
                <b>"Kiberxavfsizlikka kirish"</b> - bu chuqur kirish kursi va
                kiberxavfsizlik bo'yicha asosiy bilimlarni, shu jumladan asosiy
                tushunchalarni qamrab oladi kiberxavfsizlik, kriptografiya
                asoslari, kirishni...
              </p>
            </div>
            <div className="courses__bottom">
              <p className="courses__price">2 000 000 / oy</p>
              <div className="courses__link">
                <p>Batafsil</p>
                <span className="courses__arrow">→</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            draggable="false"
            to={`/${lang}/courses/3`}
            className="courses__card"
          >
            <div className="courses__top">
              <img src={course3} loading="lazy" className="courses__img" />
              <div className="courses__date">
                <img src={date} alt="" className="courses__icon" />
                <p> 5 oy</p>
              </div>
            </div>
            <div className="courses__desc">
              <h2 className="courses__cardtitle">Motion dizayn</h2>
              <p className="courses__text">
                Motion dizayn kursi bilan ijodiy energiya oqimingizni oching:
                animatsiya olamini kashf eting va ilg‘or animatsiya vositalari
                va usullaridan foydalangan holda jozibali vizual hikoyalar...
              </p>
            </div>
            <div className="courses__bottom">
              <p className="courses__price">2 500 000 / oy</p>
              <div className="courses__link">
                <p>Batafsil</p>
                <span className="courses__arrow">→</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            draggable="false"
            to={`/${lang}/courses/4`}
            className="courses__card"
          >
            <div className="courses__top">
              <img src={course4} loading="lazy" className="courses__img" />
              <div className="courses__date">
                <img src={date} alt="" className="courses__icon" />
                <p> 4 oy</p>
              </div>
            </div>
            <div className="courses__desc">
              <h2 className="courses__cardtitle">Grafik dizayn</h2>
              <p className="courses__text">
                Bizning grafik dizayn kursimiz bilan ijodiy salohiyatingizni
                oching. Vizual muloqot olamiga sho'ng'ing va nafaqat
                tasvirlarni, balki samarali xabarlarni yaratuvchi ekspertga
                aylaning.
              </p>
            </div>
            <div className="courses__bottom">
              <p className="courses__price">2 000 000 / oy</p>
              <div className="courses__link">
                <p>Batafsil</p>
                <span className="courses__arrow">→</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            draggable="false"
            to={`/${lang}/courses/5`}
            className="courses__card"
          >
            <div className="courses__top">
              <img src={course5} loading="lazy" className="courses__img" />
              <div className="courses__date">
                <img src={date} alt="" className="courses__icon" />
                <p> 6 oy</p>
              </div>
            </div>
            <div className="courses__desc">
              <h2 className="courses__cardtitle">Pythonda Back-end...</h2>
              <p className="courses__text">
                Python Back-end kursimiz bilan server tomonidagi rivojlanish
                dunyosiga chuqurroq kirib boring! Ishonchli va keng masshtabga
                ega veb-ilovalarni yaratish uchun kuchli vositalarni...
              </p>
            </div>
            <div className="courses__bottom">
              <p className="courses__price">1 500 000 / oy</p>
              <div className="courses__link">
                <p>Batafsil</p>
                <span className="courses__arrow">→</span>
              </div>
            </div>
          </NavLink>
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
