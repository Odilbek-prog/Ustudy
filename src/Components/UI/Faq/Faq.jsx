import React, { useState } from "react";
import { getText } from "../../../i18n";
import { useParams } from "react-router-dom";
import "./Faq.scss";

const Faq = () => {
  const { lang } = useParams();
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="faq">
      <div className="faq__wrapper">
        <h1 className="faq__title">{getText(lang, "faq_title")}</h1>
        <div className={`faq__card ${active ? "faq__change" : ""}`}>
          <div className="faq__top" onClick={toggleActive}>
            <h3 className="faq__cardtitle">{getText(lang, "faq_question")}</h3>
            <button className="faq__btn">
              <svg
                className="group-open:stroke-white"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <p className={`faq__text ${active ? "active" : ""}`}>
            {getText(lang, "faq_answer")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
