import "./HomePage.scss";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "@react-spring/web";
import MouseAnimation from "../AnimatedMousePad/MouseAnimation";

function HomePage() {
  const { t } = useTranslation();
  const ref = useRef([]);
  const [items, set] = useState([]);
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
            t("Hi! I am Thomas,"),
            t("Full-Stack Developer"),
            t("I bring your project to life using the latest development technologies"),
          ]),
        2000
      )
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            t("Hi! I am Thomas,"),
            t("Full-Stack Developer"),
            t("I bring your project to life using the latest development technologies"),
          ]),
        8000
      )
    );
  }, [t]);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className="Homepage" id="HomePage">
      <MouseAnimation />
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
