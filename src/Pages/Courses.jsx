import React, { useEffect, useState } from "react";
import course1 from "../assets/intro1.jpeg";
import course2 from "../assets/intro2.png";
import course3 from "../assets/intro3.png";
import course4 from "../assets/course4.jpeg";
import course5 from "../assets/course5.jpeg";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Loader from "../Components/UI/loader/Loader";
import Whywe from "../Components/UI/Whywe/Whywe";
import Team from "../Components/UI/Team/Team";
import Contact from "../Components/UI/Contact/Contact";
import certificate from "../assets/certificate.jpeg";
import Faq from "../Components/UI/Faq/Faq";
import Location from "../Components/UI/Location/Location";
import { getText } from "../i18n";

const Courses = () => {
  const { lang } = useParams();
  const [finalcourse, setFinalcourse] = useState(null);

  const courses = [
    {
      id: "1",
      img: course1,
      name: getText(lang, "course1.name"),
      desc: getText(lang, "course1.desc"),
      abouttitle: getText(lang, "course1.abouttitle"),
      about: getText(lang, "course1.about"),
      price: getText(lang, "course1.price"),
      monthprice: getText(lang, "course1.monthprice"),
    },
    {
      id: "2",
      img: course2,
      name: getText(lang, "course2.name"),
      desc: getText(lang, "course2.desc"),
      abouttitle: getText(lang, "course2.abouttitle"),
      about: getText(lang, "course2.about"),
      price: getText(lang, "course2.price"),
      monthprice: getText(lang, "course2.monthprice"),
    },
    {
      id: "3",
      img: course3,
      name: getText(lang, "course3.name"),
      desc: getText(lang, "course3.desc"),
      abouttitle: getText(lang, "course3.abouttitle"),
      about: getText(lang, "course3.about"),
      price: getText(lang, "course3.price"),
      monthprice: getText(lang, "course3.monthprice"),
    },
    {
      id: "4",
      img: course4,
      name: getText(lang, "course4.name"),
      desc: getText(lang, "course4.desc"),
      abouttitle: getText(lang, "course4.abouttitle"),
      about: getText(lang, "course4.about"),
      price: getText(lang, "course4.price"),
      monthprice: getText(lang, "course4.monthprice"),
    },
    {
      id: "5",
      img: course5,
      name: getText(lang, "course5.name"),
      desc: getText(lang, "course5.desc"),
      abouttitle: getText(lang, "course5.abouttitle"),
      about: getText(lang, "course5.about"),
      price: getText(lang, "course5.price"),
      monthprice: getText(lang, "course5.monthprice"),
    },
  ];

  const location = useLocation().pathname.slice(-1);

  useEffect(() => {
    handleLocation();
  }, [location, lang]);

  async function handleLocation() {
    const selectedCourse = courses.find((course) => course.id === location);
    setFinalcourse(selectedCourse || "no");
  }

  return (
    <div className="coursespage">
      {finalcourse !== null ? (
        finalcourse !== "no" ? (
          <>
            <div className="coursesintro">
              <div className="coursesintro__wrapper">
                <h1 className="coursesintro__title">{finalcourse.name}</h1>
                <p className="coursesintro__text">{finalcourse.desc}</p>
              </div>
            </div>

            <div className="coursesabout">
              <div className="coursesabout__wrapper">
                <img
                  className="coursesabout__img"
                  loading="lazy"
                  src={finalcourse.img}
                  alt="Course"
                />
                <div className="coursesabout__desc">
                  <h2 className="coursesabout__title">
                    {finalcourse.abouttitle}
                  </h2>
                  <p className="coursesabout__text">{finalcourse.about}</p>
                </div>
              </div>
            </div>

            <Whywe />
            <Team />
            <Contact />

            <div className="coursesprice">
              <div className="coursesprice__wrapper">
                <div className="coursesprice__left">
                  <div className="coursesprice__titles">
                    <h1 className="coursesprice__title">
                      {getText(lang, "price.title")}
                    </h1>
                    <h1 className="coursesprice__titlegreen">
                      {getText(lang, "price.greenTitle")}
                    </h1>
                  </div>
                  <p className="coursesprice__text">
                    {getText(lang, "price.desc")}
                  </p>
                </div>

                <div className="coursesprice__cards">
                  <div className="coursesprice__card1">
                    <h2 className="coursesprice__title">
                      {getText(lang, "price.full")} {finalcourse.price} so'm
                    </h2>
                    <NavLink to={`/${lang}#help`} className="coursesprice__btn">
                      {getText(lang, "price.request")}
                    </NavLink>
                  </div>

                  <div className="coursesprice__card2">
                    <h2 className="coursesprice__title">
                      {getText(lang, "price.installment")}
                    </h2>
                    <p className="coursesprice__text">
                      {getText(lang, "price.installmentDesc")}
                    </p>
                    <div className="coursesprice__bottom">
                      <div className="coursesprice__month">
                        {getText(lang, "price.perMonth")}{" "}
                        {finalcourse.monthprice} so'm
                      </div>
                      <p className="coursesprice__cardtext">
                        {getText(lang, "price.x4")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coursescert">
              <div className="coursescert__wrapper">
                <img
                  src={certificate}
                  loading="lazy"
                  className="coursescert__img"
                  alt="Certificate"
                />
                <div className="coursescert__desc">
                  <h1 className="coursescert__title">
                    {getText(lang, "certificate.title")}
                  </h1>
                  <p className="coursescert__text">
                    {getText(lang, "certificate.desc")}
                  </p>
                </div>
              </div>
            </div>

            <Faq />
            <Location />
          </>
        ) : (
          <p>{getText(lang, "error.notFound")}</p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Courses;
