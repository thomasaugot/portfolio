import "./CurriculumPage.scss";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function CurriculumPage() {
  const { t } = useTranslation();

  return (
    <div className="CurriculumPage" id="CurriculumPage">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          stiffness: 40,
          delay: 0.4,
          ease: "linear",
        }}
        className="gradient-underline"
      >
        <h1>{t("My Skills")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      </motion.div>
      <div className="services-container">
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="service-item"
        >
          <h2>{t("Frontend Development")}</h2>
          <p>
            {t(
              "Crafting user interfaces from scratch with the most performant technologies such as React.js or Next.js for a seamless user experience."
            )}
          </p>
          <Marquee
            gradientColor={"yellow"}
            speed={40}
            autoFill={true}
            direction={"right"}
          >
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
                  src={require("../../assets/react-logo.png")}
                  alt="React"
                  title="React"
                />
              </div>
              <div className="subtitle">React</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/MUI.png")}
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
                  src={require("../../assets/typescript-logo.png")}
                  alt="Typescript"
                  title="Typescript"
                />
              </div>
              <div className="subtitle">Typescript</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/nextjs.png")}
                  alt="Next JS"
                  title="Next JS"
                />
              </div>
              <div className="subtitle">Next.js</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/redux.png")}
                  alt="Redux"
                  title="Redux"
                />
              </div>
              <div className="subtitle">Redux</div>
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
                <img
                  height="70"
                  src={require("../../assets/Tailwind_CSS.png")}
                  alt="Tailwind CSS"
                  title="Tailwind CSS"
                />
              </div>
              <div className="subtitle">Tailwind CSS</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/jest.png")}
                  alt="Jest Testing"
                  title="Jest Testing"
                />
              </div>
              <div className="subtitle">Jest</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/figma.png")}
                  alt="Figma"
                  title="Figma"
                />
              </div>
              <div className="subtitle">Figma</div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="service-item"
        >
          <h2>{t("Backend Development")}</h2>
          <p>
            {t(
              "Building robust server-side applications using technologies like Node.js, Express, SQL, noSQL databases and cloud services."
            )}
          </p>
          <Marquee gradientColor={"yellow"} speed={40}>
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
                <img
                  height="70"
                  src="https://github.com/thomasaugot/thomasaugot/raw/main/postgrsql.png"
                  alt="PostgrSQL"
                  title="PostgrSQL"
                />
              </div>
              <div className="subtitle">PostgrSQL</div>
            </div>
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/firebase.png")}
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
                  src={require("../../assets/supabase.png")}
                  alt="Supabase"
                  title="Supabase"
                />
              </div>
              <div className="subtitle">Supabase</div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="service-item"
        >
          <h2>{t("Mobile App Development")}</h2>
          <p>
            {t(
              "Developing intuitive mobile applications for iOS and Android using native development tools."
            )}
          </p>
          <Marquee
            gradientColor={"yellow"}
            speed={40}
            autoFill={true}
            direction={"right"}
          >
            <div className="marquee-item">
              <div className="img-container">
                <img
                  height="70"
                  src={require("../../assets/react-native.png")}
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
                  src={require("../../assets/expo.png")}
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
                  src={require("../../assets/Xcode_14_icon.png")}
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
                  src={require("../../assets/new-studio-logo-1.png")}
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
                  src={require("../../assets/flutterflow.png")}
                  alt="Flutterflow"
                  title="Flutterflow"
                />
              </div>
              <div className="subtitle">Flutterflow</div>
            </div>
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
}

export default CurriculumPage;
