import React from "react";
import "./JoinUsSection.css";
import sponsor1 from "../../asssets/sponsor1.png";
import sponsor2 from "../../asssets/sponsor2.png";
import sponsor3 from "../../asssets/sponsor3.png";

const JoinUsSection = () => {
  return (
    <div className="Grid-container">
      <div className="item1">
        <div className="item-content">
          <div>
            <h1>Come and sponsor</h1>
            <p>
              Descon will offer practitioners and companies the opportunity to
              reflect on how we are shaping the world moving forward, by
              building bridges across cultures, disciplines, and industries to
              discover shared directions and goals.
            </p>
            <button className="btn">Sponsor now</button>
          </div>
        </div>
        <div className="item-img">
          <img src={sponsor1} alt="" />
        </div>
      </div>
      <div className="item1">
        <div className="item-img">
          <img src={sponsor2} alt="" />
        </div>
        <div className="item-content">
          <div>
            <h1>Join our team</h1>
            <p>
              Descon believes that until and unless members of the society are
              involved actively in the process of change and development,
              nothing can happen. To make this change happen, we invite you to
              come and be part of the Descon volunteer program.
            </p>
            <button className="btn">Volunteer now</button>
          </div>
        </div>
      </div>
      <div className="item1">
        <div className="item-content">
          <div>
            <h1>Speak at Descon ‘21</h1>
            <p>
              Descon is THE platform to share your message and elevate your
              personal brand. Past speakers appreciate our incredibly engaged
              audience and their genuine passion for the impact they make on
              their respective industries.
            </p>
            <button className="btn">Speak now</button>
          </div>
        </div>
        <div className="item-img">
          <img src={sponsor3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
