import { useEffect, useState } from "react";
import "./CurriculumPage.scss";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

function CurriculumPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="CurriculumPage" id="CurriculumPage" ref={ref}>
      {isVisible && (
        <>
          <h1>I build with...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <div className="stack" style={{ overflow: "hidden", Width: "100%" }}>
            <Marquee gradientColor={"yellow"} speed={60}>
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                alt="HTML"
                title="HTML"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                alt="CSS"
                title="CSS"
              />
              <img
                height="70"
                src="https://avatars.githubusercontent.com/u/317889?s=200&v=4"
                alt="SCSS"
                title="SCSS"
              />
              <img
                height="70"
                src={require("./typescript-logo.png")}
                alt="Typescript"
                title="Typescript"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
                alt="Bootstrap"
                title="Bootstrap"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                alt="JavaScript"
                title="JavaScript"
              />
              <img height="70" src={require("./react-logo.png")} alt="React" title="React" />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                alt="Node.js"
                title="Node.js"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                alt="Express"
                title="Express"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                alt="mongoDB"
                title="mongoDB"
              />
              <img
                height="70"
                src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
                alt="REST"
                title="REST"
              />
              <img height="70" src={require("./git-logo.png")} alt="Git" title="Git" />
            </Marquee>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <h1>Certifications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <h2>Ironhack</h2>
          <p>
            9-week web development Bootcamp, during which I was taught the following technologies:{" "}
            <br></br>- Frontend: HTML, CSS/ Bootstrap, Javascript, React.js
            <br></br>- Backend: MongoDB, Express.js, Node.js, REST APIs <br></br>- Version control:
            Git/ Github
          </p>
          <br></br>
          <div className="curriculum__buttons">
            <a
              href="https://www.credential.net/e93a0eb1-2504-45c1-9b18-f6e9fe9c5587"
              rel="noreferrer"
              target="_blank"
            >
              <button className="whiteBtn">Show credential</button>
            </a>
            <br></br>
            <a
              href="https://drive.google.com/file/d/1WGdCcFDWfJ0V-aeLkNFlnW2hYIyFQH7E/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="blueBtn">View my resume</button>
            </a>

            <img
              src={require("../../shapes/shape__one.png")}
              className="shapes"
              alt="shape"
              style={{ top: "290vh", position: "absolute", left: "15vw", overflow: "hidden" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CurriculumPage;
