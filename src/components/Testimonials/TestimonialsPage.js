import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import "./Testimonials.scss";

function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);
  const { t } = useTranslation();

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
    <div className={`TestimonialsPage ${isDesktop ? "visible" : ""}`} id="TestimonialsPage">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <h1 className="gradient-underline">{t("Testimonials")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      </motion.div>
      <br />
      <div className="testimonial__content">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="testimonial-container"
        >
          <IconContext.Provider value={{ size: 120, className: "quote-icon" }}>
            <RiDoubleQuotesL />
          </IconContext.Provider>
          <p className="testimonial-text">
            {t(
              "Thomas, in record time, has been able to create our website. He leads a team of professionals and fully satisfies us in these aspects. He shines through his technical knowledge in IT development, his responsiveness, his kindness, and especially his availability. We have appreciated all these qualities to the extent that we have asked him, along with other professionals, to lead the web marketing, social media communication, database development, in short, all of our IT projects. The entire Eurafrique community thanks him."
            )}
          </p>
          <p className="signature">
            <a
              href="https://www.linkedin.com/in/remy-riehl-757b32139/"
              rel="noreferrer"
              target="_blank"
            >
              RIEHL Rémy
            </a>
            - {t("Volunteer Coordinator, Association")} Eurafrique
          </p>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="testimonial-container"
        >
          <IconContext.Provider value={{ size: 120, className: "quote-icon" }}>
            <RiDoubleQuotesL />
          </IconContext.Provider>
          <p className="testimonial-text">
            {t(
              "Thomas Augot has been an outstanding asset to our team. His passion for development, creativity, and commitment make him a promising professional in the field. I highly recommend Thomas for any future opportunities in mobile development."
            )}
          </p>
          <p className="signature">
            <a
              href="https://www.linkedin.com/in/armand-petit-2b3994183/"
              rel="noreferrer"
              target="_blank"
            >
              PETIT Armand
            </a>
            - {t("Chief Technical Officer")}, Osly Solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
