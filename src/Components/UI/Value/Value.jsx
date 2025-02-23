import React from "react";
import "./Value.scss";
import value1 from "../../../assets/value1.png";
import value2 from "../../../assets/value2.png";
import value3 from "../../../assets/value3.png";
import value4 from "../../../assets/value4.png";
import value5 from "../../../assets/value5.png";

const Value = () => {
  return (
    <div className="value">
      <div className="value__wrapper">
        <h1 className="value__title">Bizning qadriyatlarimiz:</h1>
        <div className="value__bottom">
          <div className="value__cards">
            <div className="value__card">
              <div className="value__desc">
                <div className="value__titles">
                  <h2 className="value__num">1.</h2>
                  <h2 className="value__cardtitle">Raqobatbardoshlik</h2>
                </div>
                <p className="value__text">
                  Biz bozorda mahsulotlarimiz uchun raqobatbardosh ustunliklarni
                  yaratishga qodirmiz.
                </p>
              </div>
              <img src={value1} loading="lazy" alt="" className="value__img" />
            </div>
            <div className="value__card">
              <div className="value__desc">
                <div className="value__titles">
                  <h2 className="value__num">2.</h2>
                  <h2 className="value__cardtitle">Natijali ish</h2>
                </div>
                <p className="value__text">
                  Biz nafaqat faoliyat bilan shug‘ullanishga, balki aniq va
                  samarali natijalarga erishishga intilamiz.
                </p>
              </div>
              <img src={value2} loading="lazy" alt="" className="value__img" />
            </div>
            <div className="value__card">
              <div className="value__desc">
                <div className="value__titles">
                  <h2 className="value__num">3.</h2>
                  <h2 className="value__cardtitle">Mijoz yo‘nalishi</h2>
                </div>
                <p className="value__text">
                  Bizning barcha faoliyatimiz mijozlarimiz manfaatlari va
                  qiziqishlari uchun qurilgan. Munosabatlar va xizmatlar sifati
                  bilan biz mijozlarimizni oldindan bilishni va xursand qilishni
                  xohlaymiz.
                </p>
              </div>
              <img src={value3} loading="lazy" alt="" className="value__img" />
            </div>
            <div className="value__card">
              <div className="value__desc">
                <div className="value__titles">
                  <h2 className="value__num">4.</h2>
                  <h2 className="value__cardtitle">Yangiliklarga ochiqlik</h2>
                </div>
                <p className="value__text">
                  Biz har doim yangi istiqbollarni, yangi odamlar bilan
                  hamkorlikni izlaymiz, yangi bilimlarni egallaymiz va
                  innovatsion vositalarni joriy etish orqali muammolarni hal
                  qilamiz
                </p>
              </div>
              <img src={value4} loading="lazy" alt="" className="value__img" />
            </div>
          </div>
          <div className="value__final">
            <div className="value__left">
              <img src={value5} loading="lazy" alt="" className="value__img" />
              <h2 className="value__cardtitle">Shuningdek, ijodkorlik</h2>
            </div>
            <p className="value__finaltext">
              Biz vazifalarni bajarishda ijodiy yondashamiz. Ijodkorlik bizga
              turli muammolar uchun innovatsion yechimlarni topishga yordam
              beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
