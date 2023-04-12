import React, { useEffect, useRef } from "react";
import "./GridLines.scss";

const GridLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const comets = [];
    const count = 30;
    const cometSize = 2;

    for (let i = 0; i < count; i++) {
      comets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
        size: cometSize,
        color: "#FDB813",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      comets.forEach((comet) => {
        comet.x += comet.vx;
        comet.y += comet.vy;

        if (comet.x < -cometSize) {
          comet.x = width + cometSize;
        }

        if (comet.x > width + cometSize) {
          comet.x = -cometSize;
        }

        if (comet.y < -cometSize) {
          comet.y = height + cometSize;
        }

        if (comet.y > height + cometSize) {
          comet.y = -cometSize;
        }

        ctx.beginPath();
        ctx.fillStyle = comet.color;
        ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2, false);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canva" />;
};

export default GridLines;
