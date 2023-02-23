import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

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
              <a className={styles.nav__item} href="#PortfolioPage">
                Projects
              </a>
              <a className={styles.nav__item} href="#AboutPage">
                About
              </a>
              <a className={styles.nav__item} href="#CurriculumPage">
                Curriculum
              </a>
              <a className={styles.nav__item} href="#ContactPage">
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};

export default Header;
