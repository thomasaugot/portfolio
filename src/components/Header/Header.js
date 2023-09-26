import React, { useState } from "react";
import styles from "./Header.module.scss";
import { MdMenu, MdClose } from "react-icons/md";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <div
            div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            class="scrollspy-example"
            tabindex="0"
          >
            <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
              <a className={styles.nav__item} href="#AboutPage">
                {t("About")}
              </a>
              <a className={styles.nav__item} href="#CurriculumPage">
                {t("Curriculum")}
              </a>
              <a className={styles.nav__item} href="#PortfolioPage">
                {t("Projects")}
              </a>
              <a className={styles.nav__item} href="#TestimonialsPage">
                {t("Testimonials")}
              </a>
              <a className={styles.nav__item} href="#ContactPage">
                {t("Contact")}
              </a>
              {/* <Link to="/blog" className={styles.nav__item}>
                {t("Blog")}
              </Link> */}
              <div className={`${styles.nav__item} no-hover-effect`}>
                <LanguagesMenu />
              </div>
            </nav>
          </div>
        </div>
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
