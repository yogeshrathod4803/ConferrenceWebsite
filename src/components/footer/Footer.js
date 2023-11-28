import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section--footer">
      <div className="footer-container">
        <div class="footer-text" bis_skin_checked="1">
          <a href="https://webflow.com" class="webflow-link">
            Powered by&nbsp;Webflow
          </a>
          <ul className="links">
            <li className="footer-text">Tickets</li>
            <li className="footer-text">Privacy Policy</li>
            <li className="footer-text">FAQs</li>
            <li className="footer-text">Schedule</li>
            <li className="footer-text">Code of Conduct</li>
            <li className="footer-text">Speakers</li>
          </ul>
        </div>

        <div className="social-icons">
          <img
            src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b454b93b6ff31_instagram%20(1).svg"
            alt="instgram"
          />
          <img
            src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b459b28b6ff32_twitter%20(1).svg"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b45aa18b6ff30_facebook-circular-logo%201.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
