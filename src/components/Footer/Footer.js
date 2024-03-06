import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
// import BGAnimation from "../FooterBG/FooterBG";
import { useTranslation } from "react-i18next";
import { BiSolidChevronsUp } from "react-icons/bi";
import { IconContext } from "react-icons";
import { IoHeart } from "react-icons/io5";
import AnimatedSquares from "../AnimatedSquares/AnimatedSquares";

function Footer() {
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
    <div className="Footer" ref={ref}>
      {isVisible && (
        <Fade>
          <AnimatedSquares />
          <a href="#HomePage">
            <div className="chevron-container">
              <IconContext.Provider value={{ className: "chevron-icon", size: "2.7em" }}>
                <BiSolidChevronsUp />
              </IconContext.Provider>
            </div>
            <p style={{ textAlign: "center" }}>{t("Back to Top")}</p>
          </a>
          <br></br>
          <p style={{ textAlign: "center", color: "white" }}>
            {t("Crafted with")} <IoHeart className="heart-icon" size="25px" /> {t("by")}
            <a href="https://www.linkedin.com/in/thomas-augot/"> Thomas Augot</a>
          </p>
          <br></br>
        </Fade>
      )}
    </div>
  );
}

export default Footer;
