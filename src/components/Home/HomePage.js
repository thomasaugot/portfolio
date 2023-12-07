import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="Homepage" id="HomePage">
      <div className="topContent">
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
            <h1 className="mainTitle gradient-text" style={{ textDecoration: "none" }}>
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
            <h1 className="mainTitle gradient-text" style={{ textDecoration: "none" }}>
              {t("Full-Stack Developer")} /&gt;
            </h1>
          </motion.div>
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
        </div>

        <br></br>
      </div>
    </div>
  );
}

export default HomePage;
