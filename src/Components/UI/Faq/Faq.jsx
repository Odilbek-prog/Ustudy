import React, { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="faq">
      <div className="faq__wrapper">
        <h1 className="faq__title">Ko‘p beriladigan savollar:</h1>
        <div className={`faq__card ${active ? "faq__change" : null}`}>
          <div className="faq__top" onClick={toggleActive}>
            <h3 className="faq__cardtitle">
              Kurslar kimlar uchun mo‘ljallangan?
            </h3>
            <button className="faq__btn">
              <svg
                class="group-open:stroke-white"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <p className={`faq__text ${active ? "active" : null}`}>
            Dasturlash sohasida yangi boshlovchilar ham, o‘z malakasini
            oshirishni istagan mutaxassislar ham Ustudy Akademiyasida o‘qishlari
            mumkin. Dasturlar barcha darajadagi treninglar uchun mo‘ljallangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
