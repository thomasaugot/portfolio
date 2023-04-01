import "animate.css";
import { Fade } from "react-awesome-reveal";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage" id="HomePage">
      <Fade duration={3000}>
        {" "}
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
    </div>
  );
}

export default HomePage;
