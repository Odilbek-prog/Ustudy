import { getText } from "../../../i18n";
import { useParams } from "react-router-dom";
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

// const teamMembers = [
//   {
//     img: team1,
//     name: "Abduvasitov Nodir",
//     experience: "4 years",
//     description:
//       "United Marketing kabi kompaniyalarda hamda mashhur People.Uz, Nova.24, Bugun.Uz va Взгляд.Uz internet-platformalarida 4-yillik amaliy tajribaga ega bo'lgan grafik dizayner.",
//   },
//   {
//     img: team2,
//     name: "Ibroximzoda Ayubxon",
//     experience: "5 years",
//     description:
//       "Katta amaliy tajribaga ega bo`lib, u o'z faoliyatini apptechka.uz da dasturchi sifatida boshlagan va hozirda ML Community`da faol rivojlanmoqda.",
//   },
//   {
//     img: team3,
//     name: "Ivan Alabyev",
//     experience: "2 years",
//     description:
//       "Kiberxavfsizlik sohasida tajribali mentor. Uning TATUdagi ikki yillik mentorlik tajribasi talabalarni yuqori sifatli tanishtirishni kafolatlaydi.",
//   },
//   {
//     img: team4,
//     name: "Jabborov Alimardon",
//     experience: "4 years",
//     description:
//       "TopSkills Online, FIVE5 Agency, Teamit va Kalibri Education kompaniyalarida motion dizayni bo'yicha mutaxassis.",
//   },
//   {
//     img: team5,
//     name: "Nosirjonov Asadbek",
//     experience: "3 years",
//     description:
//       "Najot Ta'lim o'quv markazida 1,5 yillik o'qituvchilik tajribasiga ega bo'lgan front-end rivojlantirish bo'yicha mutaxassis.",
//   },
//   {
//     img: team6,
//     name: "Mardiyev Ulug`bek",
//     experience: "12 years",
//     description:
//       "O‘zbek tilida 'Kiberxavfsizlikka kirish' kursi bo‘yicha malakali mentor, 12 yillik amaliy va 11 yillik mentorlik tajribasiga ega.",
//   },
//   {
//     img: team7,
//     name: "Artyom Paleev",
//     experience: "9 years",
//     description:
//       "ONESEC va Linegroup-da to'plangan 9 yillik ko'p qirrali tajribaga ega. Chuqur bilimi va kasbiy mahorati uning darslarini qiziqarli qiladi.",
//   },
// ];

const Team = () => {
  const { lang } = useParams();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const teamMembers = [
    {
      img: team1,
      name: "Abduvasitov Nodir",
      experience: "team_member1_experience",
      description: "team_member1_description",
    },
    {
      img: team2,
      name: "Ibroximzoda Ayubxon",
      experience: "team_member2_experience",
      description: "team_member2_description",
    },
    {
      img: team3,
      name: "Ivan Alabyev",
      experience: "team_member3_experience",
      description: "team_member3_description",
    },
    {
      img: team4,
      name: "Jabborov Alimardon",
      experience: "team_member4_experience",
      description: "team_member4_description",
    },
    {
      img: team5,
      name: "Nosirjonov Asadbek",
      experience: "team_member5_experience",
      description: "team_member5_description",
    },
    {
      img: team6,
      name: "Mardiyev Ulug'bek",
      experience: "team_member6_experience",
      description: "team_member6_description",
    },
    {
      img: team7,
      name: "Artyom Paleev",
      experience: "team_member7_experience",
      description: "team_member7_description",
    },
  ];

  return (
    <div className="team">
      <div className="team__wrapper">
        <div className="team__desc">
          <div className="team__titles">
            <h1 className="team__title">{getText(lang, "team_title1")}</h1>
            <h1 className="team__titlegreen">{getText(lang, "team_title2")}</h1>
          </div>
          <p className="team__text">{getText(lang, "team_description")}</p>
        </div>

        <Slider className="team__cards" {...settings}>
          {teamMembers.map((member, index) => (
            <div className="team__card" key={index}>
              <img
                src={member.img}
                loading="lazy"
                className="team__img"
                alt={member.name}
              />
              <div className="team__work">
                <img
                  src={briefcase}
                  loading="lazy"
                  className="team__icon"
                  alt="briefcase"
                />
                <p>{getText(lang, member.experience)}</p>
              </div>
              <div className="team__carddesc">
                <h3 className="team__cardtitle">{member.name}</h3>
                <p className="team__cardtext">
                  {getText(lang, member.description)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
