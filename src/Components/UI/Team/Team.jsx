import React from "react";
import "./Team.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from "../../../assets/team1.jpeg";
import team2 from "../../../assets/team2.jpeg";
import team3 from "../../../assets/team3.png";
import team4 from "../../../assets/team4.jpeg";
import team5 from "../../../assets/team5.jpeg";
import team6 from "../../../assets/team6.png";
import team7 from "../../../assets/team7.png";
import briefcase from "../../../assets/briefcase.png";

const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="team">
      <div className="team__wrapper">
        <div className="team__desc">
          <div className="team__titles">
            <h1 className="team__title">Bizning</h1>
            <h1 className="team__titlegreen">Spikerlar</h1>
          </div>
          <p className="team__text">
            Biz sizga to'g'ri kursni tanlashda yordam beramiz!
          </p>
        </div>
        <Slider className="team__cards" {...settings}>
          <div className="team__card">
            <img src={team1} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 4 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Abduvasitov Nodir</h3>
              <p className="team__cardtext">
                United Marketing kabi kompaniyalarda hamda mashhur People.Uz,
                Nova.24, Bugun.Uz va Взгляд.Uz internet-platformalarida 4-yillik
                amaliy tajribaga ega bo'lgan grafik dizayner. U ajoyib tajriba
                va noyob amaliy ko'nikmalarga ega bo'lib, nafaqat o'z
                mashg'ulotlarini olib boradi, balki talabalarning
                ilhomlantiruvchisi hisoblanadi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team2} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 5 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Ibroximzoda Ayubxon</h3>
              <p className="team__cardtext">
                Katta amaliy tajribaga ega bo`lib, u o'z faoliyatini
                apptechka.uz da dasturchi sifatida boshlagan va hozirda ML
                Community`da faol rivojlanmoqda. Uning noyob mahorati va bilimi
                Algoritmics Tashkent va IDU universitetida mentorlik tajribasi
                bilan quvvatlanadi, u nafaqat o‘z bilimlari bilan o‘rtoqlashadi,
                balki talabalarga dasturlash olamini o‘zlashtirishga va dadil
                qadam qo`yishga yordam beradi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team3} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 2 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Ivan Alabyev</h3>
              <p className="team__cardtext">
                Katta amaliy tajriba va chuqur bilimga ega bo'lgan
                kiberxavfsizlik sohasida tajribali mentor. Uning TATUdagi ikki
                yillik mentorlik tajribasi (2017-2019) talabalarni
                kiberxavfsizlik olami bilan yuqori sifatli va professional
                tarzda tanishtirishni kafolatlaydi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team4} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 4 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Jabborov Alimardon</h3>
              <p className="team__cardtext">
                TopSkills Online, FIVE5 Agency, Teamit va Kalibri Education
                kompaniyalarida 3-yillik amaliy tajribaga ega bo'lgan motion
                dizayni bo'yicha mutaxassis, nafaqat animatsiya sohasida chuqur
                bilimga, balki qimmatli ekspert mentorlik tajribasiga ham ega,
                bu o`tiladigan darslarni nafaqat ma'lumotli, balki qiziqarli
                hamda talabalar uchun ilhomlantiruvchi bo`lishiga yordam beradi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team5} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 3 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Nosirjonov Asadbek</h3>
              <p className="team__cardtext">
                UIC Group, Supersite va Codetech.io kompaniyalarida tajribaga
                ega, shuningdek, Najot Ta'lim o'quv markazida 1,5 yillik
                o'qituvchilik tajribasiga ega bo'lgan front-end rivojlantirish
                bo'yicha mutaxassis. Uning dasturlash va o'qitish bo'yicha noyob
                tajribasi talabalarga dasturlash sohasidagi zamonaviy
                tendentsiyalar va ilg'or tajribalar haqida qimmatli tushunchalar
                beradi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team6} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 12 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Mardiyev Ulug`bek</h3>
              <p className="team__cardtext">
                O‘zbek tilida “Kiberxavfsizlikka kirish” kursi bo‘yicha malakali
                mentor, 12 yillik amaliy va 11 yillik mentorlik tajribasiga ega.
                Uning chuqur bilimi va yuksak professionalligi uni shu sohaning
                haqiqiy mutaxassisiga aylantiradi.
              </p>
            </div>
          </div>
          <div className="team__card">
            <img src={team7} loading="lazy" className="team__img" alt="" />
            <div className="team__work">
              <img src={briefcase} loading="lazy" className="team__icon" />
              <p>Work experience: 9 years</p>
            </div>
            <div className="team__carddesc">
              <h3 className="team__cardtitle">Artyom Paleev</h3>
              <p className="team__cardtext">
                ONESEC va Linegroup-da to'plangan 9 yillik ko'p qirrali
                tajribaga ega. Chuqur bilimi va kasbiy mahorati uning darslarini
                nafaqat qiziqarli, balki murakkab kiberxavfsizlik masalalarini
                tushunishga intilayotgan barcha talabalar uchun asqotadi.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Team;
