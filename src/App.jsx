import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import CookieModal from "./Components/UI/cookie/CookieModal";
import "./App.scss";
import Courses from "./Pages/Courses";

const App = () => {
  // Cookie state

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "eng";
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    if (!["uzb", "turk", "eng", "china"].includes(currentLang)) {
      navigate(`/${savedLang}${location.pathname}`, { replace: true });
    }
  }, [navigate, location]);

  return (
    <Routes>
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:lang/course1" element={<Courses />} />
        <Route path="/:lang/course2" element={<Courses />} />
        <Route path="/:lang/course3" element={<Courses />} />
        <Route path="/:lang/course4" element={<Courses />} />
        <Route path="/:lang/course5" element={<Courses />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
    <CookieModal />
  </Router>
);

export default AppWrapper;
