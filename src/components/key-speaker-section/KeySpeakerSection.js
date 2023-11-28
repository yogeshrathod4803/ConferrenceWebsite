import React from "react";
import "../key-speaker-section/KeySpeakerSection.css";

const KeySpeakerSection = () => {
  return (
    <>
      <div className="key-speakers-container">
        <img
          src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b452d6fb6ff2e_Vector%2058.svg"
          loading="lazy"
          alt=""
          class="semi-circle2 orange-1"
        />
        <div className="speakers-container">
          <div className="speakers">
            <div class="designation">Key Speaker</div>
            <h1>Harp</h1>
            <h1>Joseph</h1>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b45171fb6ff6b_slack%20white.svg"
                alt="CompanyName"
                loading="lazy"
              />
              <p>
                Chris Woakes is Adobe's Chief Product Officer and Executive VP
                of the Creative Cloud. Chris’ primary focus is making Creative
                Cloud a creativity platform for all. He will be talking about
                how the open source of platforms fosters creativity.
              </p>
              <button>FEB 14 17:30</button>
            </div>
          </div>
          <div className="speakers-images">
            <img
              src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b45d39db6ff89_Speaker%20Full%2003%402x.png"
              alt="speaker=img"
              loading="lazy"
            />
            <div class="see-speakers-button">
              <button className="all-speakers-button">See all speakers</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeySpeakerSection;
