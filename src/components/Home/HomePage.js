import "animate.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import HeaderBG from "../HeaderBG/HeaderBG";
import { useTranslation } from "react-i18next";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const { t } = useTranslation();

  return (
    <div className="Homepage" id="HomePage" ref={ref}>
      {isVisible && (
        <Fade>
          <HeaderBG />
          <div className="topContent">
            <div className="titleDiv">
              <h1
                className="animate__animated animate__fadeInLeft animate__delay-0s homepageTitle"
                style={{ textDecoration: "none" }}
              >
                &lt; {t("Hi! I am Thomas,")}
              </h1>
              <h1
                className="animate__animated animate__fadeInRight animate__delay-1s homepageTitle gradient-text"
                style={{ textDecoration: "none" }}
              >
                {t("Full-Stack Developer")} /&gt;
              </h1>
            </div>
            <Fade>
              <p className="animate__animated animate__fadeInLeft animate__delay-2s homepageP">
                {t("I bring your project to life using the latest development technologies")}
              </p>
            </Fade>
            <br></br>
          </div>
          <a href="#AboutPage" className="linkAbout">
            <div class="container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </a>
        </Fade>
      )}
    </div>
  );
}

export default HomePage;
