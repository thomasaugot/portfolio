import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "./PortfolioPage.scss";

function PortfolioPage() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      capture1: require("./kingpad.png"),
      name: t("projects.0.name"),
      description: t("projects.0.description"),
      stack: [
        "Next.JS",
        "Tailwind CSS",
        "Typescript",
        "Material UI",
        "Figma",
        "Vercel",
      ],
      linkRepo: "https://github.com/thomasaugot/kp-next.js",
      linkDemo: "https://kp-next-js.vercel.app/",
    },
    // {
    //   id: 2,
    //   capture1: require("./cmdurand.png"),
    //   name: t("projects.1.name"),
    //   description: t("projects.1.description"),
    //   stack: ["Next.JS", "Tailwind CSS", "Framer Motion", "EmailJS", "Vercel"],
    //   linkRepo: "https://github.com/thomasaugot/charpente-menuiserie-durand",
    //   linkDemo: "https://www.cmdurand.fr/",
    // },
    {
      id: 3,
      capture1: require("./farmhouse (2).png"),
      name: t("projects.2.name"),
      description: t("projects.2.description"),
      stack: [
        "React.js",
        "SCSS",
        "Typescript",
        "Bootstrap",
        "Google maps API",
        "Netlify",
      ],
      linkRepo: "https://github.com/thomasaugot/farmhouse-table-website",
      linkDemo: "https://farmhouse-table.netlify.app/",
    },
    {
      id: 4,
      capture1: require("./attorneyster.png"),
      name: t("projects.3.name"),
      description: t("projects.3.description"),
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Framer motion",
        "EmailJS",
        "Figma",
        "Vercel",
      ],
      linkRepo: "https://github.com/thomasaugot/attorneyster-nextjs",
      linkDemo: "https://attorneyster-ta.vercel.app/",
    },
    {
      id: 5,
      capture1: require("./todos.png"),
      name: t("projects.4.name"),
      description: t("projects.4.description"),
      stack: [
        "React.js",
        "SCSS",
        "Typescript",
        "Jest",
        "PostgreSQL",
        "React Context API",
        "Netlify",
        "Adaptable.io",
      ],
      linkRepo:
        "https://github.com/thomasaugot/typescript-todo-app-frontend/tree/postgrsql-link-setup",
      linkDemo: "https://todayzzz-todos.netlify.app/",
    },
    {
      id: 6,
      capture1: require("./eurafrique.png"),
      name: t("projects.5.name"),
      description: t("projects.5.description"),
      stack: [
        "React.js",
        "SCSS",
        "i18next",
        "React Context API",
        "Cpanel",
        "Supabase",
      ],
      linkRepo: "https://github.com/Eurafrique-eu/eurafrique-client",
      linkDemo: "https://eurafrique-eu.vercel.app/",
    },
    {
      id: 7,
      capture1: require("./partymates1.png"),
      name: t("projects.6.name"),
      description: t("projects.6.description"),
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "REST API",
        "Postman",
        "Netlify",
        "Adaptable.io",
      ],
      linkRepo: "https://github.com/thomasaugot/app-partymates-client",
      linkDemo: "https://partymates.netlify.app/",
    },
    {
      id: 8,
      capture1: require("./game-capture1.png"),
      name: t("projects.7.name"),
      description: t("projects.7.description"),
      stack: ["HTML", "CSS", "Javascript", "Netlify"],
      linkRepo: "https://github.com/thomasaugot/project-js-shooting-game",
      linkDemo: "https://pickle-rick-shooting-game.netlify.app/",
    },
  ];

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="PortfolioPage" id="PortfolioPage">
      <motion.h1
        whileInView={{ x: 1, opacity: 1 }}
        initial={{ x: "-100%", opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="featured-projects-header gradient-underline"
      >
        {t("Featured Projects")}
      </motion.h1>
      <br></br>
      {isMobile ? (
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
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
                className={`project-card ${
                  index === activeCardIndex ? "flipped" : ""
                } card`}
                alignHeight={true}
              >
                <div
                  className="card-front card"
                  onClick={() => handleCardClick(index)}
                >
                  <img src={project.capture1} alt="project" />
                  <h1 className="card-title">{project.name}</h1>
                  <div className="tech-stack">
                    {project.stack.map((item, stackIndex) => (
                      <p key={stackIndex}>{item}</p>
                    ))}
                  </div>

                  <div className="page__dots">
                    <img
                      src={require("../../assets/flip-icon.png")}
                      alt="flip-icon"
                      className="flip-icon"
                    />
                  </div>
                </div>
                <div
                  className="card-back card"
                  onClick={() => handleCardClick(index)}
                >
                  <p className="item-description">{project.description}</p>
                  <div className="project__buttons">
                    <button
                      className="blueBtn gradient-bg"
                      onClick={() => window.open(project.linkRepo, "_blank")}
                    >
                      {t("View Code")}
                    </button>
                    <button
                      className="whiteBtn"
                      onClick={() => window.open(project.linkDemo, "_blank")}
                    >
                      {t("Visit page")}
                    </button>
                  </div>
                </div>
              </ReactCardFlip>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="desktop-swiper"
        >
          <Swiper
            effect={"coverflow"}
            initialSlide={1}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
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
                key={project.id}
                variants={itemVariants}
                className="swiper-slide"
              >
                <SwiperSlide>
                  <ReactCardFlip
                    isFlipped={activeCardIndex === index}
                    flipDirection="horizontal"
                    className={`project-card ${
                      index === activeCardIndex ? "flipped" : ""
                    } card`}
                    alignHeight={true}
                  >
                    {/* Card front */}
                    <motion.div
                      onClick={() => handleCardClick(index)}
                      className="card-front card"
                    >
                      {/* Content */}
                      <img src={project.capture1} alt="project" />
                      <h1 className="card-title">{project.name}</h1>
                      <div className="tech-stack">
                        {project.stack.map((item, stackIndex) => (
                          <p key={stackIndex}>{item}</p>
                        ))}
                      </div>
                      <div className="page__dots">
                        <img
                          src={require("../../assets/flip-icon.png")}
                          alt="flip-icon"
                          className="flip-icon"
                        />
                      </div>
                    </motion.div>

                    {/* Card back */}
                    <motion.div
                      onClick={() => handleCardClick(index)}
                      className="card-back card"
                    >
                      {/* Content */}
                      <p className="item-description">{project.description}</p>
                      <div className="project__buttons">
                        <a href={project.linkRepo} class="blueBtn">
                          {t("View Code")}
                        </a>
                        <a
                          href={project.linkDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whiteBtn"
                        >
                          {t("Visit page")}
                        </a>
                      </div>
                    </motion.div>
                  </ReactCardFlip>
                </SwiperSlide>
              </motion.div>
            ))}
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}

export default PortfolioPage;
