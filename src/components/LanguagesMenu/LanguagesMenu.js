import React, { useState, useEffect } from "react";
import englishFlag from "../../assets/en.png";
import frenchFlag from "../../assets/fr.png";
import spanishFlag from "../../assets/es.png";
import { useTranslation } from "react-i18next";
import "./LanguagesMenu.scss";

function LanguagesMenu() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languages-menu">
      <div className="flag-container">
        <button
          onClick={() => changeLanguage("fr")}
          className={`flag-button ${activeLanguage === "fr" ? "active" : ""}`}
        >
          <img src={frenchFlag} alt="French Flag" className="flag" />
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`flag-button ${activeLanguage === "en" ? "active" : ""}`}
        >
          <img src={englishFlag} alt="English Flag" className="flag" />
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`flag-button ${activeLanguage === "es" ? "active" : ""}`}
        >
          <img src={spanishFlag} alt="Spanish Flag" className="flag" />
        </button>
      </div>
    </div>
  );
}

export default LanguagesMenu;
