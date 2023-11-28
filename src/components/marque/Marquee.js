import React, { useState, useEffect } from "react";
import "../marque/Marquee.css"; // Import your CSS file for styling

const Marquee = () => {
  const messages = [
    "EARLY BIRD SALES ENDS IN 8 DAYS 12 HOURS 34 MINUTES 3 SECONDS",
    "•",
    "EARLY BIRD SALES ENDS IN 8 DAYS 12 HOURS 34 MINUTES 3 SECONDS",
    "•",
    "EARLY BIRD SALES ENDS IN 8 DAYS 12 HOURS 34 MINUTES 3 SECONDS",
    "•",
    "EARLY BIRD SALES ENDS IN 8 DAYS 12 HOURS 34 MINUTES 3 SECONDS",
  ];

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const marqueeContainer = document.getElementById("marquee-container");

    const marqueeAnimation = () => {
      if (marqueeContainer) {
        const containerWidth = marqueeContainer.offsetWidth;
        setTranslateX((prevTranslateX) => prevTranslateX - 1);

        if (Math.abs(translateX) >= containerWidth) {
          setTranslateX(0);
        }
      }
    };

    const intervalId = setInterval(marqueeAnimation, 30);

    return () => clearInterval(intervalId);
  }, [translateX]);

  return (
    <div className="section--marquee">
      <div className="marquee">
        <div id="marquee-container" className="outside-container">
          <div className="black-line"></div>
          <div
            className="inside-container"
            style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          >
            {messages.map((message, index) => (
              <div key={index} className="marquee-text">
                {message}
              </div>
            ))}
          </div>
          <div className="black-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
