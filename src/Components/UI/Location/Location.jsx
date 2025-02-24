import React from "react";
import { NavLink } from "react-router-dom";
import { getText } from "../../../i18n";
import { useParams } from "react-router-dom";
import "./Location.scss";

const Location = () => {
  const { lang } = useParams(); // Til parametrini olish

  return (
    <div className="location" id="address">
      <div className="location__wrapper">
        <h1 className="location__title">{getText(lang, "location_title")}</h1>
        <div className="location__bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.1541110200974!2d68.9974250760401!3d40.999999971351755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzAwLjAiTiA2OcKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1740312289652!5m2!1sen!2s"
            className="location__map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="location__right">
            <p className="location__text">
              {getText(lang, "location_address_label")}
            </p>
            <h2 className="location__address">
              {getText(lang, "location_address")}
            </h2>

            <p className="location__text">
              {getText(lang, "location_landmark_label")}
            </p>
            <h2 className="location__address">
              {getText(lang, "location_landmark")}
            </h2>

            <p className="location__text">
              {getText(lang, "location_phone_label")}
            </p>
            <NavLink className="location__link" to="tel:+998555015353">
              <h2 className="location__address">
                {getText(lang, "location_phone")}
              </h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
