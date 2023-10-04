import React, { useEffect, useState } from "react";
import "./Header.scss";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
        <div className="menu-items">
          <ScrollLink
            to="AboutPage"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "AboutPage" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("AboutPage");
            }}
          >
            {t("About")}
          </ScrollLink>
          <ScrollLink
            to="CurriculumPage"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "CurriculumPage" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("CurriculumPage");
            }}
          >
            {t("Curriculum")}
          </ScrollLink>
          <ScrollLink
            to="PortfolioPage"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "PortfolioPage" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("PortfolioPage");
            }}
          >
            {t("Projects")}
          </ScrollLink>
          <ScrollLink
            to="TestimonialsPage"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "TestimonialsPage" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("TestimonialsPage");
            }}
          >
            {t("Testimonials")}
          </ScrollLink>
          <ScrollLink
            to="ContactPage"
            smooth={true}
            duration={500}
            className={`nav-item ${activeLink === "ContactPage" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("ContactPage");
            }}
          >
            {t("Contact")}
          </ScrollLink>
          <Link
            to="/blog"
            className={`nav-item ${activeLink === "blog" ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("blog");
            }}
          >
            {t("Blog")}
          </Link>
          <div className={`nav-item no-hover-effect`}>
            <LanguagesMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
