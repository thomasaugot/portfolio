import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="topContent">
        <h1 className="homepageTitle">
          Hi! I am Thomas, <br />
          Web Developer
        </h1>
        <img
          src={require("./profile-picture.png")}
          alt="profile"
          className="profilePicure"
        />
      </div>

      <p className="homepageP">
        I create your design
        using the latest development technologies
      </p>
      <Link className="linkAbout" to="/about">Know more</Link>
    </div>
  );
}

export default HomePage;
