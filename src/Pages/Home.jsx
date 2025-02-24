import Intro from "../Components/UI/Intro/Intro";
import Whywe from "../Components/UI/Whywe/Whywe";
import Courses from "../Components/UI/Courses/Courses";
import Contact from "../Components/UI/Contact/Contact";
import Team from "../Components/UI/Team/Team";
import Director from "../Components/UI/Director/Director";
import Vacancies from "../Components/UI/Vacancies/Vacancies";
import Help from "../Components/UI/Help/Help";
import Value from "../Components/UI/Value/Value";
import Work from "../Components/UI/Work/Work";
import Faq from "../Components/UI/Faq/Faq";
import Location from "../Components/UI/Location/Location";
import React from "react";

const MemoIntro = React.memo(Intro);
const MemoWhywe = React.memo(Whywe);
const MemoCourses = React.memo(Courses);
const MemoContact = React.memo(Contact);
const MemoTeam = React.memo(Team);
const MemoDirector = React.memo(Director);
const MemoVacancies = React.memo(Vacancies);
const MemoHelp = React.memo(Help);
const MemoValue = React.memo(Value);
const MemoWork = React.memo(Work);
const MemoFaq = React.memo(Faq);
const MemoLocation = React.memo(Location);

const Home = () => {
  return (
    <div className="home">
      <MemoIntro />
      <MemoWhywe />
      <MemoCourses />
      <MemoContact />
      <MemoTeam />
      <MemoDirector />
      <MemoVacancies />
      {/* <MemoHelp />
      <MemoValue />
      <MemoWork />
      <MemoFaq />
      <MemoLocation /> */}
    </div>
  );
};

export default Home;
