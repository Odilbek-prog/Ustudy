import React from "react";
import "./Whywe.scss";
import like from "../../../assets/like.png";
import student from "../../../assets/student.png";
import comp from "../../../assets/comp.png";
import heart from "../../../assets/heart.png";
import file from "../../../assets/file.png";
import briefcase from "../../../assets/briefcase3.png";

const Whywe = () => {
  return (
    <div className="whywe">
      <div className="whywe__wrapper">
        <div className="whywe__titles">
          <h1 className="whywe__title">Nima uchun</h1>
          <h1 className="whywe__titlegreen">bizni tanlashadi?</h1>
        </div>
        <div className="whywe__cards">
          <div className="whywe__card">
            <img src={like} loading="lazy" alt="" className="whywe__icon" />
            <h2 className="whywe__cardtitle">Aktual va amaliy bilimlar</h2>
            <p className="whywe__text">
              Amaliyotli mentorlar. Dual ta'lim, o'qishning birinchi oyida
              amaliyot o'tash imkonini beradi.
            </p>
          </div>
          <div className="whywe__card">
            <img src={student} loading="lazy" alt="" className="whywe__icon" />
            <h2 className="whywe__cardtitle">Hamfikrlar jamoasi</h2>
            <p className="whywe__text">
              Bu yerda siz nafaqat do'stlar, balki mentorlar bilan ham
              uchrashasiz.
            </p>
          </div>
          <div className="whywe__card">
            <img
              src={briefcase}
              loading="lazy"
              alt=""
              className="whywe__icon"
            />
            <h2 className="whywe__cardtitle">O'qitishning qulay shakli</h2>
            <p className="whywe__text">
              Vaqtingizni tanlang va haftasiga 3 marta 1,5 soatdan o'qing.
            </p>
          </div>
          <div className="whywe__card">
            <img src={comp} loading="lazy" alt="" className="whywe__icon" />
            <h2 className="whywe__cardtitle">Kirishda kasbga yo`naltirish</h2>
            <p className="whywe__text">
              Kasbga yo'naltirish — bu insonning tajribasi, qiziqishlari,
              his-tuyg'ulari va ehtiyojlaridan kelib chiqqan holda karyera
              qurishga yordam beradigan keng qamrovli jarayon.
            </p>
          </div>
          <div className="whywe__card">
            <img src={heart} loading="lazy" alt="" className="whywe__icon" />
            <h2 className="whywe__cardtitle">Bandlik</h2>
            <p className="whywe__text">
              Hamkor kompaniyalarimiz allaqachon sizni kutmoqda!
            </p>
          </div>
          <div className="whywe__card">
            <img src={file} loading="lazy" alt="" className="whywe__icon" />
            <h2 className="whywe__cardtitle">Soft Skills rivojlаntirish</h2>
            <p className="whywe__text">
              O'z maqsadlariga erishish uchun barcha mutaxassislar nafaqat hard
              skills, balki soft skillsni ham rivojlantirishlari kerak: samarali
              muzokaralar, marketing va innovatsion biznes modellari, IT uchun
              moliya, taqdimot va pitching hamda boshqalar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whywe;
