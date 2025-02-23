import React from "react";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import "./Value.scss";
import value1 from "../../../assets/value1.png";
import value2 from "../../../assets/value2.png";
import value3 from "../../../assets/value3.png";
import value4 from "../../../assets/value4.png";
import value5 from "../../../assets/value5.png";

const Value = () => {
  const { lang } = useParams();

  return (
    <div className="value">
      <div className="value__wrapper">
        <h1 className="value__title">{getText(lang, "valuesTitle")}</h1>
        <div className="value__bottom">
          <div className="value__cards">
            {[
              {
                num: "1",
                title: "competitiveness",
                text: "competitivenessText",
                img: value1,
              },
              {
                num: "2",
                title: "effectiveWork",
                text: "effectiveWorkText",
                img: value2,
              },
              {
                num: "3",
                title: "customerFocus",
                text: "customerFocusText",
                img: value3,
              },
              {
                num: "4",
                title: "opennessToInnovation",
                text: "opennessToInnovationText",
                img: value4,
              },
            ].map((value, index) => (
              <div key={index} className="value__card">
                <div className="value__desc">
                  <div className="value__titles">
                    <h2 className="value__num">{value.num}.</h2>
                    <h2 className="value__cardtitle">
                      {getText(lang, value.title)}
                    </h2>
                  </div>
                  <p className="value__text">{getText(lang, value.text)}</p>
                </div>
                <img
                  src={value.img}
                  loading="lazy"
                  alt=""
                  className="value__img"
                />
              </div>
            ))}
          </div>
          <div className="value__final">
            <div className="value__left">
              <img src={value5} loading="lazy" alt="" className="value__img" />
              <h2 className="value__cardtitle">
                {getText(lang, "creativity")}
              </h2>
            </div>
            <p className="value__finaltext">
              {getText(lang, "creativityText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
