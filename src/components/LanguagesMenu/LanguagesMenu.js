import React, { useState, useEffect } from "react";
import englishFlag from "../../assets/en.png";
import frenchFlag from "../../assets/fr.png";
import spanishFlag from "../../assets/es.png";
import { useTranslation } from "react-i18next";
import { RxChevronDown } from "react-icons/rx";
import "./LanguagesMenu.scss";
import { IconContext } from "react-icons";

function LanguagesMenu() {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(getInitialLanguage());

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); // Close the menu after selecting a language
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function getInitialLanguage() {
    const browserLanguage = navigator.language.split("-")[0];
    switch (browserLanguage) {
      case "fr":
        return "fr";
      case "es":
        return "es";
      default:
        return "en";
    }
  }

  return (
    <div className="languages-menu">
      <img
        src={
          activeLanguage === "fr" ? frenchFlag : activeLanguage === "en" ? englishFlag : spanishFlag
        }
        className="active-flag"
        alt="Flag"
        onClick={toggleMenu}
      />
      <IconContext.Provider
        value={{ style: { verticalAlign: "middle", width: "30px", cursor: "pointer" } }}
        className="chevron-icon"
      >
        <RxChevronDown size={20} onClick={toggleMenu} />{" "}
      </IconContext.Provider>

      <div
        className="dropdown-menu"
        style={{
          display: isMenuOpen ? "block" : "none",
        }}
      >
        <button onClick={() => changeLanguage("fr")} className="flag-button item">
          <img src={frenchFlag} alt="French Flag" className="flag-button" />
          <p>Français</p>
        </button>
        <button onClick={() => changeLanguage("en")} className="flag-button item">
          <img src={englishFlag} alt="English Flag" className="flag-button" />
          <p>English</p>
        </button>
        <button onClick={() => changeLanguage("es")} className="flag-button item">
          <img src={spanishFlag} alt="Spanish Flag" className="flag-button" />
          <p>Español</p>
        </button>
      </div>
    </div>
  );
}

export default LanguagesMenu;
