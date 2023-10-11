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
            animate={{ rotate: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0, rotate: -100 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <h1 className="homepageTitle gradient-text" style={{ textDecoration: "none" }}>
              &lt; {t("Hi! I am Thomas,")}
            </h1>
          </motion.div>
          <motion.div
            animate={{ rotate: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0, rotate: 40 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <h1 className="homepageTitle gradient-text" style={{ textDecoration: "none" }}>
              {t("Full-Stack Developer")} /&gt;
            </h1>
          </motion.div>
        </div>
        <motion.div
          animate={{ rotate: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0, rotate: 100 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <p className="homepageP">
            {t("I bring your project to life using the latest development technologies")}
          </p>
        </motion.div>
        <br></br>
      </div>
      <a href="#AboutPage" className="linkAbout">
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </a>
    </div>
  );
}

export default HomePage;
