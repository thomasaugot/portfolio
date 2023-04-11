import "animate.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import "./HomePage.scss";
import { useEffect, useState } from "react";

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
          <img
            src={require("../../shapes/shape__two.png")}
            className="shapes"
            alt="shape"
            style={{ top: "-50vh", position: "absolute", left: "45vw", overflow: "hidden" }}
          />
          <div className="topContent">
            <div className="titleDiv">
              <h1
                className="animate__animated animate__fadeInLeft homepageTitle"
                style={{ textDecoration: "none" }}
              >
                &lt; Hi! I am Thomas,
              </h1>
              <h1
                className="animate__animated animate__fadeInLeft animate__delay-1s homepageTitle bluetext"
                style={{ textDecoration: "none" }}
              >
                Web Developer /&gt;
              </h1>
            </div>
            <p className="homepageP">
              I bring your project to life using the latest development technologies
            </p>
            <br></br>
          </div>
          <a href="#AboutPage" className="linkAbout">
            <div class="container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </a>
          <img
            src={require("../../shapes/shape__one.png")}
            className="shapes"
            alt="shape"
            style={{ top: "85vh", position: "absolute", left: "2vw", overflow: "hidden" }}
          />
        </Fade>
      )}
    </div>
  );
}

export default HomePage;
