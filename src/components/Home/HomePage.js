import "./HomePage.scss";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "@react-spring/web";

function HomePage() {
  const { t } = useTranslation();
  const ref = useRef([]);
  const [items, set] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [{ innerHeight: 0 }, { opacity: 0, height: 0 }],
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () =>
          set([
            t("< Hi! I am Thomas,"),
            t("Web & Mobile Developer />"),
            t("Dedicated to crafting beautiful and user-friendly digital products"),
          ]),
        2000
      )
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            t("< Hi! I am Thomas,"),
            t("Web & Mobile Developer />"),
            t("Dedicated to crafting beautiful and user-friendly digital products"),
          ]),
        8000
      )
    );
  }, [t]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className="Homepage" id="HomePage">
      <div className="title-block">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div style={rest} onClick={reset} className="title-item gradient-text">
            <animated.div style={{ overflow: "hidden", height: "auto" }} className="gradient-text">
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
