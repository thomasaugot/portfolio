import { useEffect, useState } from "react";
import "./CurriculumPage.scss";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div className="CurriculumPage" id="CurriculumPage" ref={ref}>
      {isVisible && (
        <>
          <h1>{t("I build with...")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <div
            className="stack"
            style={{
              overflow: "hidden",
              Width: "100%",
            }}
          >
            <Marquee gradientColor={"yellow"} speed={50}>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                    alt="HTML"
                    title="HTML"
                  />
                </div>

                <div className="subtitle">HTML</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                    alt="CSS"
                    title="CSS"
                  />
                </div>
                <div className="subtitle">CSS</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                    alt="JavaScript"
                    title="JavaScript"
                  />
                </div>
                <div className="subtitle">Javascript</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://avatars.githubusercontent.com/u/317889?s=200&v=4"
                    alt="SCSS"
                    title="SCSS"
                  />
                </div>
                <div className="subtitle">SCSS</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./typescript-logo.png")}
                    alt="Typescript"
                    title="Typescript"
                  />
                </div>
                <div className="subtitle">Typescript</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./nextjs.png")} alt="Next JS" title="Next JS" />
                </div>
                <div className="subtitle">Next.js</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./figma.png")} alt="Figma" title="Figma" />
                </div>
                <div className="subtitle">Figma</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
                    alt="Bootstrap"
                    title="Bootstrap"
                  />
                </div>
                <div className="subtitle">Bootstrap</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./npm.png")} alt="NPM" title="NPM" />
                </div>
                <div className="subtitle">NPM</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./react-logo.png")} alt="React" title="React" />
                </div>
                <div className="subtitle">React</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./MUI.png")}
                    alt="Material UI"
                    title="Material UI"
                  />
                </div>
                <div className="subtitle">Material UI</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                    alt="Node.js"
                    title="Node.js"
                  />
                </div>
                <div className="subtitle">Node.js</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                    alt="Express"
                    title="Express"
                  />
                </div>
                <div className="subtitle">Express.js</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                    alt="mongoDB"
                    title="mongoDB"
                  />
                </div>
                <div className="subtitle">MongoDB</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
                    alt="REST"
                    title="REST"
                  />
                </div>
                <div className="subtitle">REST API</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./git-logo.png")} alt="Git" title="Git" />
                </div>
                <div className="subtitle">GIT</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./Tailwind_CSS.png")}
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                  />
                </div>
                <div className="subtitle">Tailwind CSS</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img height="70" src={require("./gitlab.png")} alt="Gitlab" title="Gitlab" />
                </div>
                <div className="subtitle">Gitlab</div>
              </div>
              {/* <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./jest.png")}
                    alt="Jest Testing"
                    title="Jest Testing"
                  />
                </div>
                <div className="subtitle">Jest</div>
              </div> */}
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./react-native.png")}
                    alt="React Native"
                    title="React Native"
                  />
                </div>
                <div className="subtitle">React Native</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./expo.png")}
                    alt="Expo"
                    title="Expo"
                    style={{ borderRadius: 20 }}
                  />
                </div>
                <div className="subtitle">Expo</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./Xcode_14_icon.png")}
                    alt="Xcode"
                    title="Xcode"
                    style={{ borderRadius: 20 }}
                  />
                </div>
                <div className="subtitle">Xcode</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./new-studio-logo-1.png")}
                    alt="Android Studio"
                    title="Android Studio"
                    style={{ borderRadius: 20 }}
                  />
                </div>
                <div className="subtitle">Android Studio</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./firebase.png")}
                    alt="Firebase"
                    title="Firebase"
                    style={{ borderRadius: 20 }}
                  />
                </div>
                <div className="subtitle">Firebase</div>
              </div>
              <div className="marquee-item">
                <div className="img-container">
                  <img
                    height="70"
                    src={require("./supabase.png")}
                    alt="Supabase"
                    title="Supabase"
                  />
                </div>
                <div className="subtitle">Supabase</div>
              </div>
            </Marquee>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h1>{t("Certifications")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <div className="certifications-container">
            <div className="certification-item">
              <h2>{t("Full-Stack Web Development, MERN - Ironhack")}</h2>
              <p>
                {t(
                  "9-week web development bootcamp, during which I was taught the following technologies:"
                )}
                <br></br>- Frontend: HTML, CSS/ Bootstrap, Javascript, React.js
                <br></br>- Backend: MongoDB, Express.js, Node.js, REST APIs <br></br>-{" "}
                {t("Version control")}: Git/ Github
              </p>
              <br></br>
              <div className="curriculum__buttons">
                <a
                  href="https://www.credential.net/e93a0eb1-2504-45c1-9b18-f6e9fe9c5587"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="blueBtn">{t("Show credential")}</button>
                </a>
              </div>
              <br></br>
            </div>
            <br></br>
            <div>
              <h2>{t("React Native Development - Udemy")}</h2>
              <p>
                {t("28-hour course covering mobile apps development using :")}
                <br></br>- React Native CLI <br></br>- Expo
                <br></br>- Android & iOS specifics
                <br></br>- SQLite
              </p>
              <br></br>
              <div className="curriculum__buttons">
                <a
                  href="https://www.udemy.com/certificate/UC-19a32e00-feb2-4ccf-b645-e68d820d637d/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="blueBtn">{t("Show credential")}</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          {/* <div className="resume-container">
            <a
              href="https://drive.google.com/file/d/112Q93ZQRS83YXY9S3jy6L0ksDfZV7WoL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="blueBtn">View my resume</button>
            </a>
          </div> */}
        </>
      )}
    </div>
  );
}

export default CurriculumPage;
