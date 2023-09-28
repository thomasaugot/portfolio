import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import BGAnimation from "../FooterBG/FooterBG";

function FooterArticles() {
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
    <div className="Footer" ref={ref}>
      {isVisible && (
        <Fade>
          <div style={{ textAlign: "center" }}>
            <BGAnimation />
          </div>
          <p style={{ textAlign: "center", color: "white" }}>
            2023 © <a href="https://www.linkedin.com/in/thomas-augot/"> Thomas Augot</a>.
          </p>
          <br></br>
        </Fade>
      )}
    </div>
  );
}

export default FooterArticles;
