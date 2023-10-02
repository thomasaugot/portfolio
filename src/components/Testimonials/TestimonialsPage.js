import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.scss";
import { useInView } from "react-intersection-observer";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IconContext } from "react-icons";

function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  const { t } = useTranslation();

  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current = document.getElementById("Testimonials");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`TestimonialsPage ${isDesktop && inView ? "visible" : ""}`}
      ref={ref}
      id="TestimonialsPage"
    >
      <Slide direction="down" triggerOnce={true} fraction={1} delay={100}>
        <h1 className="gradient-underline" style={{ marginTop: "2vh" }}>
          {t("Testimonials")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </Slide>
      <br />
      <div className="testimonials__content">
        <Slide direction="down" triggerOnce={true} fraction={1}>
          <div className="testimonial-container">
            <IconContext.Provider value={{ size: "5em" }}>
              <RiDoubleQuotesL />
            </IconContext.Provider>
            <p className="testimonial-text">
              {t(
                "Thomas, in record time, has been able to create our website. He leads a team of professionals and fully satisfies us in these aspects. He shines through his technical knowledge in IT development, his responsiveness, his kindness, and especially his availability. We have appreciated all these qualities to the extent that we have asked him, along with other professionals, to lead the web marketing, social media communication, database development, in short, all of our IT projects. The entire Eurafrique community thanks him."
              )}
            </p>
            <IconContext.Provider value={{ className: "quote-icon", size: "5em" }}>
              <RiDoubleQuotesR />
            </IconContext.Provider>
            <p className="signature">
              <a
                href="https://www.linkedin.com/in/remy-riehl-757b32139/"
                rel="noreferrer"
                target="_blank"
              >
                RIEHL Rémy
              </a>{" "}
              - {t("Volunteer Coordinator, Association")} Eurafrique
            </p>
          </div>
          <div className="curriculum__buttons testimonial-link">
            <a
              href="https://drive.google.com/file/d/1-sRrc2sL9f4tcI6uzJ4rjQck6DmSmiHj/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blueBtn gradient-bg">{t("See full document")}</button>
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Testimonials;
