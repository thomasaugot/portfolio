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
          <div className="topContent">
            <div className="firstColumn">
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
            </div>
            <br></br>

            <div className="secondColumn">
              <img src={require("./profile-picture.png")} alt="profile" className="profilePicure" />
            </div>
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
