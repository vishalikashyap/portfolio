import React, { useEffect } from "react";
import "./cursoreffect.css";

const CursorEffect = () => {
  useEffect(() => {
    const createBlob = (x, y) => {
      const blob = document.createElement("div");
      blob.className = "cursor-blob";
      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;

      // Randomize size and color
      const size = Math.random() * 80 + 50;
      const colors = ["#00ffe0", "#a855f7", "#fb00ff", "#00ff95", "#c084fc"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      blob.style.background = `radial-gradient(circle, ${color}, transparent 60%)`;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;

      document.body.appendChild(blob);

      // Animate and remove
      setTimeout(() => {
        blob.style.opacity = "0";
        blob.style.transform = "scale(1.8)";
      }, 10);

      setTimeout(() => {
        document.body.removeChild(blob);
      }, 800);
    };

    const handleMove = (e) => {
      createBlob(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default CursorEffect;
