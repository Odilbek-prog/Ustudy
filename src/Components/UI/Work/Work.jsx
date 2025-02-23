import React from "react";
import mission from "../../../assets/mission.jpeg";
import check from "../../../assets/check.png";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work">
      <div className="work__wrapper">
        <img src={mission} loading="lazy" alt="" className="work__img" />
        <div className="work__right">
          <h1 className="work__title">Bizning vazifamiz:</h1>
          <p className="work__text">
            Biz global muammolarga ochiq bo`lgan IT-mutaxassislar avlodini
            tayyorlamoqdamiz, bilim, ko`nikma va amaliy tajriba orqali jamiyat
            hayot sifatini yaxshilashga qaratilgan innovatsion yechimlarni
            yaratmoqdamiz.
          </p>
          <div className="work__bottom">
            <p className="work__text">BIZNING QADRIYATLARIMIZ:</p>
            <div className="work__values">
              <div className="work__value">
                <img src={check} alt="" className="work__check" />
                <p className="work__text">YANGILIKLARGA OCHIQLIK</p>
              </div>
              <div className="work__value">
                <img src={check} alt="" className="work__check" />
                <p className="work__text">KREATIVLIK</p>
              </div>
              <div className="work__value">
                <img src={check} alt="" className="work__check" />
                <p className="work__text">RAQOBATDOSHLILIK</p>
              </div>
              <div className="work__value">
                <img src={check} alt="" className="work__check" />
                <p className="work__text">SAMARADORLIK VA PROFESSIONALLIK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
