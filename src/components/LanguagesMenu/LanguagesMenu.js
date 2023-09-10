import React, { useState } from "react";
import englishFlag from "../../assets/en.png";
import frenchFlag from "../../assets/fr.png";
import spanishFlag from "../../assets/es.png";
import { useTranslation } from "react-i18next";
import { RxChevronDown } from "react-icons/rx";
import "./LanguagesMenu.scss";
import { IconContext } from "react-icons";

function LanguagesMenu() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    setActiveLanguage(lng);
    setIsMenuOpen(false);
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="languages-menu" onClick={toggleMenu}>
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
      >
        <RxChevronDown size={20} />
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
