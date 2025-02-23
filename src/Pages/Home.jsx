import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getText } from "../i18n";
import Intro from "../Components/UI/Intro/Intro";
import Whywe from "../Components/UI/Whywe/Whywe";
import Courses from "../Components/UI/Courses/Courses";
import Contact from "../Components/UI/Contact/Contact";
import Team from "../Components/UI/Team/Team";
import Director from "../Components/UI/Director/Director";
import Vacancies from "../Components/UI/Vacancies/Vacancies";
import Help from "../Components/UI/Help/Help";

const Home = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
    } else {
      navigate("/uz");
    }
  }, [lang, navigate]);

  return (
    <div className="home">
      <Intro />
      <Whywe />
      <Courses />
      <Contact />
      <Team />
      <Director />
      <Vacancies />
      <Help />
    </div>
  );
};

export default Home;
