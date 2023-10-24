import ReactCardFlip from "react-card-flip";
import { TbPointFilled, TbPoint } from "react-icons/tb";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./PortfolioPage.scss";
import { motion } from "framer-motion";

function PortfolioPage() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1023);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      id: 8,
      capture1: require("./cheftom.png"),
      name: t("projects.0.name"),
      description: t("projects.0.description"),
      stack: t("projects.0.stack"),
      linkRepo: "https://github.com/thomasaugot/recipes-react-native",
    },
    {
      id: 6,
      capture1: require("./kingpad.png"),
      name: t("projects.1.name"),
      description: t("projects.1.description"),
      stack: t("projects.1.stack"),
      linkRepo: "https://github.com/thomasaugot/kp-next.js",
      linkDemo: "https://kingpad-v1-1-new-figma.vercel.app/",
    },
    {
      id: 7,
      capture1: require("./eurafrique.png"),
      name: t("projects.2.name"),
      description: t("projects.2.description"),
      stack: t("projects.2.stack"),
      linkRepo: "https://github.com/Eurafrique-eu/eurafrique-client",
      linkDemo: "https://eurafrique-eu.vercel.app/",
    },
    {
      id: 4,
      capture1: require("./farmhouse (2).png"),
      name: t("projects.3.name"),
      description: t("projects.3.description"),
      stack: t("projects.3.stack"),
      linkRepo: "https://github.com/thomasaugot/farmhouse-table-website",
      linkDemo: "https://farmhouse-table.netlify.app/",
    },
    {
      id: 5,
      capture1: require("./todos.png"),
      name: t("projects.4.name"),
      description: t("projects.4.description"),
      stack: t("projects.4.stack"),
      linkRepo: "https://github.com/thomasaugot/typescript-todo-app",
      linkDemo: "https://todayzzz-todos.netlify.app/",
    },
    {
      id: 1,
      capture1: require("./partymates1.png"),
      name: t("projects.5.name"),
      description: t("projects.5.description"),
      stack: t("projects.5.stack"),
      linkRepo: "https://github.com/thomasaugot/app-partymates-client",
      linkDemo: "https://partymates.netlify.app/",
    },
    {
      id: 2,
      capture1: require("./responsive-BGtrotter.png"),
      name: t("projects.6.name"),
      description: t("projects.6.description"),
      stack: t("projects.6.stack"),
      linkRepo: "https://github.com/project-web-app-cities/the-broke-globetrotter",
      linkDemo: "https://the-broke-globetrotter.adaptable.app/",
    },
    {
      id: 3,
      capture1: require("./game-capture1.png"),
      name: t("projects.7.name"),
      description: t("projects.7.description"),
      stack: t("projects.7.stack"),
      linkRepo: "https://github.com/thomasaugot/project-js-shooting-game",
      linkDemo: "https://pickle-rick-shooting-game.netlify.app/",
    },
  ];

  const slidesPerView = isMobile
    ? 1
    : window.innerWidth >= 768 && window.innerWidth <= 1024
    ? 2
    : 3;

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <div className="PortfolioPage" id="PortfolioPage">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <h1 className="gradient-underline">{t("My projects")}</h1>
      </motion.div>
      <br></br>
      {isMobile ? (
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.5, opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 60,
                delay: 0.2,
              }}
            >
              <ReactCardFlip
                isFlipped={activeCardIndex === index}
                flipDirection="horizontal"
                className={`project-card ${index === activeCardIndex ? "flipped" : ""} card`}
                alignHeight={true}
              >
                <div className="card-front card" onClick={() => handleCardClick(index)}>
                  <img src={project.capture1} alt="project" />
                  <h1 className="card-title">{project.name}</h1>
                  <p>{project.description}</p>
                  <h4>{t("More details")}</h4>
                  <div className="page__dots">
                    <TbPointFilled />
                    <TbPoint />
                  </div>
                </div>
                <div className="card-back card" onClick={() => handleCardClick(index)}>
                  <h2>{t("Tech Stack")}:</h2>
                  {project.stack}
                  <div className="project__buttons">
                    <button
                      className="blueBtn gradient-bg"
                      onClick={() => window.open(project.linkRepo, "_blank")}
                    >
                      {t("View Code")}
                    </button>
                    {project.id !== 8 && (
                      <button
                        className="whiteBtn"
                        onClick={() => window.open(project.linkDemo, "_blank")}
                      >
                        {t("Visit page")}
                      </button>
                    )}
                  </div>
                  <h4>{t("back")}</h4>
                  <div className="page__dots">
                    <TbPoint />
                    <TbPointFilled />
                  </div>
                </div>
              </ReactCardFlip>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.5, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 60,
            delay: 0.2,
          }}
        >
          <Swiper
            effect={"coverflow"}
            initialSlide={1}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.7, opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 0.4,
                }}
                className="marquee-item"
              >
                <SwiperSlide key={project.id}>
                  <div>
                    <ReactCardFlip
                      isFlipped={activeCardIndex === index}
                      flipDirection="horizontal"
                      className={`project-card ${index === activeCardIndex ? "flipped" : ""} card`}
                      alignHeight={true}
                    >
                      <div className="card-front card" onClick={() => handleCardClick(index)}>
                        <img src={project.capture1} alt="project" />
                        <h1 className="card-title">{project.name}</h1>
                        <p>{project.description}</p>
                        <h4>{t("More details")}</h4>
                        <div className="page__dots">
                          <TbPointFilled />
                          <TbPoint />
                        </div>
                      </div>
                      <div className="card-back card" onClick={() => handleCardClick(index)}>
                        <h2>{t("Tech Stack")}:</h2>
                        {project.stack}
                        <div className="project__buttons">
                          <a href={project.linkRepo} class="blueBtn">
                            {t("View Code")}
                          </a>
                          {project.id !== 8 && (
                            <a
                              href={project.linkDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="whiteBtn"
                            >
                              {t("Visit page")}
                            </a>
                          )}
                        </div>

                        <h4>{t("back")}</h4>
                        <div className="page__dots">
                          <TbPoint />
                          <TbPointFilled />
                        </div>
                      </div>
                    </ReactCardFlip>
                  </div>
                </SwiperSlide>
              </motion.div>
            ))}

            <div class="swiper-pagination gradient-bg"></div>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}

export default PortfolioPage;
