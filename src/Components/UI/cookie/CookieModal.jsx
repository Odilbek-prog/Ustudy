import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./cookie-modal.scss";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    Cookies.set("cookie_consent", "declined", { expires: 1, path: "/" }); // 1 kun saqlanadi (har safar chiqadi)
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <h2>Cookie Ruxsati</h2>
        <p>
          Saytimiz sizning tajribangizni yaxshilash uchun cookie-fayllardan
          foydalanadi. Ruxsat berasizmi?
        </p>
        <div className="cookie-buttons">
          <button className="accept" onClick={handleAccept}>
            Ha, Ruxsat
          </button>
          <button className="decline" onClick={handleDecline}>
            Yo'q
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
