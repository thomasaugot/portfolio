import "./HomePage.scss";
import HeaderBG from "../HeaderBG/HeaderBG";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="Homepage" id="HomePage">
      <div className="topContent">
        <HeaderBG />
        <div className="titleDiv">
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <h1 className="homepageTitle gradient-text" style={{ textDecoration: "none" }}>
              &lt; {t("Hi! I am Thomas,")}
            </h1>
          </motion.div>
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <h1 className="homepageTitle gradient-text" style={{ textDecoration: "none" }}>
              {t("Full-Stack Developer")} /&gt;
            </h1>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ x: 1, opacity: 1 }}
          initial={{ x: "-100%", opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 1.0,
            ease: "easeOut",
          }}
        >
          <p className="homepageP">
            {t("I bring your project to life using the latest development technologies")}
          </p>
        </motion.div>
        <br></br>
      </div>
      {/* <motion.a
        whileInView={{ x: 1, opacity: 1 }}
        initial={{ x: "-20%", opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <a href="#AboutPage" className="linkAbout">
          <div class="container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </a>
      </motion.a> */}
    </div>
  );
}

export default HomePage;
