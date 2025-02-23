import React from "react";
import { NavLink } from "react-router-dom";
import "./Location.scss";

const Location = () => {
  return (
    <div className="location" id="address">
      <div className="location__wrapper">
        <h1 className="location__title">Bizning manzilimiz:</h1>
        <div className="location__bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.1541110200974!2d68.9974250760401!3d40.999999971351755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzAwLjAiTiA2OcKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1740312289652!5m2!1sen!2s"
            width={600}
            height={300}
            style={{ border: 0, borderRadius: 15 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location__right">
            <p className="location__text">Manzil:</p>
            <h2 className="location__address">
              O'zbekiston Respublikasi, Toshkent, Mo'minov ko'chasi, 7/2,
              Uzinfocom binosi ichida
            </h2>
            <p className="location__text">Mo'ljal</p>
            <h2 className="location__address">"IT-Park"</h2>
            <p className="location__text">Telefon</p>
            <NavLink className={"location__link"} to={"tel:+998555015353"}>
              <h2 className="location__address">+998(55) 501-5353</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
