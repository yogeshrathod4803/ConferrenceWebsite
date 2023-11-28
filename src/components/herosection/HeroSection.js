import React from "react";
import HeroImage from "../../asssets/hero-img.png";
import "../herosection/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-content">
        <div className="icons">
          <img
            src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b458c4ab6ff2c_Vector%2056.svg"
            loading="lazy"
            alt=""
            class="semi-circle black-1"
          />
        </div>
        <div className="title1">
          <h2 className="heading1">Designers</h2>
        </div>
        <div className="title2">
          <h2 className="heading2">Conference</h2>
        </div>
        <div className="hero-subtext">
          <p className="hero-text">
            A conference that is designed to change the way you think
          </p>
        </div>
        <div className="conference-details">
          <div className="bold-label-text">
            <img
              src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b452c7bb6ff37_calendar.svg"
              loading="lazy"
              width="18"
              alt="Calendar"
              className="calendar-icon landing-page"
            />
            13th, 14th, 15th February ‘21
          </div>

          <div className="sponsor-button">
            <a href="/tickets" className="secondary-button w-button">
              Get tickets
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b4512feb6ff2d_Vector%2057.svg"
          loading="lazy"
          alt="Semi-circle Pink"
          className="semi-circle pink-1"
        />
        <img
          src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b455c98b6ff2b_Vector%2055.svg"
          loading="lazy"
          alt="Semi-circle Yekllow"
          className="semi-circle yellow-1"
        />

        <img
          src={HeroImage}
          loading="lazy"
          width={"400px"}
          height={"400px"}
          alt="Sponsorship"
          className="hero-landing-page"
        />
      </div>
    </div>
  );
};

export default HeroSection;
