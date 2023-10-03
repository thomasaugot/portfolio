import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { MdMenu, MdClose } from "react-icons/md";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70; // Adjusted for header height

      if (isElementInViewport("AboutPage", scrollPosition)) {
        setActiveLink("AboutPage");
      } else if (isElementInViewport("CurriculumPage", scrollPosition)) {
        setActiveLink("CurriculumPage");
      } else if (isElementInViewport("PortfolioPage", scrollPosition)) {
        setActiveLink("PortfolioPage");
      } else if (isElementInViewport("TestimonialsPage", scrollPosition)) {
        setActiveLink("TestimonialsPage");
      } else if (isElementInViewport("ContactPage", scrollPosition)) {
        setActiveLink("ContactPage");
      } else {
        setActiveLink("");
      }
    };

    const isElementInViewport = (id, scrollPosition) => {
      const element = document.getElementById(id);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      const topOffset = rect.top + window.pageYOffset;
      const bottomOffset = topOffset + rect.height;

      return scrollPosition >= topOffset && scrollPosition < bottomOffset;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
          <ScrollLink
            to="AboutPage"
            smooth={true}
            duration={500}
            className={`${styles.nav__item} ${activeLink === "AboutPage" ? styles.active : ""}`}
            onClick={() => setActiveLink("AboutPage")}
          >
            {t("About")}
          </ScrollLink>
          <ScrollLink
            to="CurriculumPage"
            smooth={true}
            duration={500}
            className={`${styles.nav__item} ${
              activeLink === "CurriculumPage" ? styles.active : ""
            }`}
            onClick={() => setActiveLink("CurriculumPage")}
          >
            {t("Curriculum")}
          </ScrollLink>
          <ScrollLink
            to="PortfolioPage"
            smooth={true}
            duration={500}
            className={`${styles.nav__item} ${activeLink === "PortfolioPage" ? styles.active : ""}`}
            onClick={() => setActiveLink("PortfolioPage")}
          >
            {t("Projects")}
          </ScrollLink>
          <ScrollLink
            to="TestimonialsPage"
            smooth={true}
            duration={500}
            className={`${styles.nav__item} ${
              activeLink === "TestimonialsPage" ? styles.active : ""
            }`}
            onClick={() => setActiveLink("TestimonialsPage")}
          >
            {t("Testimonials")}
          </ScrollLink>
          <ScrollLink
            to="ContactPage"
            smooth={true}
            duration={500}
            className={`${styles.nav__item} ${activeLink === "ContactPage" ? styles.active : ""}`}
            onClick={() => setActiveLink("ContactPage")}
          >
            {t("Contact")}
          </ScrollLink>
          <Link
            to="/blog"
            className={`${styles.nav__item} ${activeLink === "blog" ? styles.active : ""}`}
            onClick={() => setActiveLink("blog")}
          >
            {t("Blog")}
          </Link>
          <div className={`${styles.nav__item} no-hover-effect`}>
            <LanguagesMenu />
          </div>
        </nav>{" "}
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <MdMenu /> : <MdClose />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
