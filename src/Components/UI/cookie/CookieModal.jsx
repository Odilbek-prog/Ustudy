import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { getText } from "../../../i18n";
import "./cookie-modal.scss";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useParams();

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie_consent");

    if (!cookieConsent || cookieConsent === "declined") {
      setTimeout(() => setIsVisible(true), 5000); // 5 sekunddan keyin modal chiqadi
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 7, path: "/" }); // 1 hafta saqlanadi
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 1, path: "/" }); // 1 kun saqlanadi
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <h2>{getText(lang, "cookieTitle")}</h2>
        <p>{getText(lang, "cookieDescription")}</p>
        <div className="cookie-buttons">
          <button className="accept" onClick={handleAccept}>
            {getText(lang, "accept")}
          </button>
          <button className="decline" onClick={handleDecline}>
            {getText(lang, "decline")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
