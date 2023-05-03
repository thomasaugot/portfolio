import "animate.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import GridLines from "../GridLines/GridLines";

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

  return (
    <div className="Homepage" id="HomePage" ref={ref}>
      {isVisible && (
        <Fade>
          <GridLines />
          <div className="topContent">
            <div className="titleDiv">
              <h1
                className="animate__animated animate__fadeInLeft animate__delay-0s homepageTitle"
                style={{ textDecoration: "none" }}
              >
                &lt; Hi! I am Thomas,
              </h1>
              <h1
                className="animate__animated animate__fadeInRight animate__delay-1s homepageTitle bluetext"
                style={{ textDecoration: "none" }}
              >
                Web Developer /&gt;
              </h1>
            </div>
            <Fade>
              <p className="animate__animated animate__fadeInLeft animate__delay-2s homepageP">
                I bring your project to life using the latest development technologies
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
