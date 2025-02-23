import React, { memo, useMemo } from "react";
import "./Intro.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    }),
    []
  );

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__desc">
          <div className="intro__titles">
            <h1 className="intro__title">IT MINDED{">"}MAKE PEOPLE </h1>
            <h1 className="intro__titlegreen">IT MINDED</h1>
          </div>
          <p className="intro__text">
            Biz global muammolarga ochiq bo`lgan IT-mutaxassislar avlodini
            tayyorlamoqdamiz, bilim, ko`nikma va amaliy tajriba orqali jamiyat
            hayot sifatini yaxshilashga qaratilgan innovatsion yechimlarni
            yaratmoqdamiz.
          </p>
          <NavLink className="intro__btn">
            Murojaat yuboring{" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.36841 18C1.65789 18 1.18421 17.7632 0.710524 17.2895C-0.236841 16.3421 -0.236841 14.9211 0.710524 13.9737L12.5526 2.36848C13.5 1.42112 14.921 1.42112 15.8684 2.36848C16.8157 3.31585 16.8157 4.7369 15.8684 5.68426L4.0263 17.2895C3.55262 17.7632 2.8421 18 2.36841 18Z"></path>
              <path d="M15.6312 14.6842C14.2101 14.6842 13.2628 13.7368 13.2628 12.3157V4.73683H5.68384C4.26279 4.73683 3.31543 3.78946 3.31543 2.36841C3.31543 0.947365 4.26279 0 5.68384 0H15.6312C17.0522 0 17.9996 0.947365 17.9996 2.36841V12.3157C17.9996 13.7368 17.0522 14.6842 15.6312 14.6842Z"></path>
            </svg>
          </NavLink>
        </div>
        <Slider className="intro__right" {...settings}>
          <NavLink draggable="false" className="intro__card intro__card1">
            <h1>Front-end dasturlash</h1>
            <p className="intro__date">5 oy</p>
          </NavLink>
          <NavLink draggable="false" className="intro__card intro__card2">
            <h1>Kiberxavfsizlikka kirish</h1>
            <p className="intro__date">2 oy</p>
          </NavLink>
          <NavLink draggable="false" className="intro__card intro__card3">
            <h1>Motion dizayn</h1>
            <p className="intro__date">5 oy</p>
          </NavLink>
        </Slider>
      </div>
    </div>
  );
};

export default memo(Intro);
