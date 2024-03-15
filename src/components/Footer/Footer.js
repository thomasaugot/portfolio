import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { BiSolidChevronsUp } from "react-icons/bi";
import { IconContext } from "react-icons";
import { IoHeart } from "react-icons/io5";

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
          <a href="#HomePage">
            <div className="chevron-container">
              <svg width="40" height="40" className="chevron-icon">
                <defs>
                  <linearGradient
                    id="chevronGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop offset="55%" stopColor="rgba(3, 218, 198, 1)" />
                    <stop offset="95%" stopColor="rgba(102, 255, 0, 1)" />
                  </linearGradient>
                </defs>
                <BiSolidChevronsUp
                  className="chevron-icon"
                  fill="url(#chevronGradient)"
                  size="40px"
                />
              </svg>
            </div>
            <p style={{ textAlign: "center" }}>{t("Back to Top")}</p>
          </a>
          <br />
          <p style={{ textAlign: "center", color: "white" }}>
            {t("Crafted with")}{" "}
            <svg width="28" height="25" className="heart-icon">
              <defs>
                <linearGradient
                  id="heartGradient"
                  gradientTransform="rotate(45)"
                >
                  <stop offset="55%" stopColor="rgba(3, 218, 198, 1)" />
                  <stop offset="95%" stopColor="rgba(102, 255, 0, 1)" />
                </linearGradient>
              </defs>
              <IoHeart
                className="heart-icon"
                fill="url(#heartGradient)"
                size="25px"
              />
            </svg>
            {t("by")}
            <a href="https://www.linkedin.com/in/thomas-augot/">
              {" "}
              Thomas Augot
            </a>
          </p>
          <br />
        </Fade>
      )}
    </div>
  );
}

export default Footer;
