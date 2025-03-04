import React, { useEffect, lazy, Suspense, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Loader from "./Components/UI/loader/Loader";
import "./App.scss";
import Courses from "./Pages/Courses";

// Lazy Loading
const Home = lazy(() => import("./Pages/Home"));
const Layout = lazy(() => import("./Components/Layout"));
const CookieModal = lazy(() => import("./Components/UI/cookie/CookieModal"));

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const savedLang = useMemo(() => localStorage.getItem("lang") || "eng", []);
  const pathParts = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname]
  );
  const currentLang = pathParts[0];

  useEffect(() => {
    if (!["uzb", "turk", "eng", "china"].includes(currentLang)) {
      navigate(`/${savedLang}${location.pathname}`, { replace: true });
    }
  }, [currentLang, savedLang, navigate, location.pathname]);

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
    <Suspense fallback={<Loader />}>
      <CookieModal />
    </Suspense>
  </Router>
);

export default AppWrapper;
