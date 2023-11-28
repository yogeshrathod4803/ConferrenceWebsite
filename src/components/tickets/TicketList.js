// Card.js

import React from "react";
import "../tickets/TicketList.css";

const TicketList = (props) => {
  return (
    <div className="tickets-container">
      <div className="card-header">
        <h1 className=" header-content">Buy the tickets</h1>
        <span className="header-content">Limited seats available</span>
      </div>
      <div className="ticket-list">
        <div className="card">
          <div className="card-content">
            <img
              src="https://uploads-ssl.webflow.com/60b8d88c4f8b45b756b6ff24/60b8d88c4f8b450992b6ffea_regular_ticket_icon.svg"
              alt="Card "
              className="card-image"
            />
            <span>Regular</span>
            <h2>$ 29.00 USD</h2>
            <p className="content-ticket">
              This pass grants you live access to the conference, access to
              networking sessions and the ability to ask Q&A questions. Also,
              enjoy a little goodie bag that includes a participation
              certificate from us! We're so excited
            </p>
            <button className="card-actions">Add to cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              src="https://uploads-ssl.webflow.com/60b8d88c4f8b45b756b6ff24/60b8d88c4f8b4537ecb6ffe9_vip_ticket_icon.svg"
              alt="Card "
              className="card-image"
            />
            <span>VIP</span>
            <h2>$ 89.00 USD</h2>
            <p className="content-ticket">
              The VIP ticket grants you live access, the ability to rewatch
              sessions and access to VIP Q&A sessions. Moreover, gain access to
              mentoring sessions and get your portfolio vetted by one of our
              speakers.
            </p>
            <button className="card-actions">Add to cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              src="https://uploads-ssl.webflow.com/60b8d88c4f8b45b756b6ff24/60b8d88c4f8b454a46b6ffe8_premium_ticket_icon.svg"
              alt="Card "
              className="card-image"
            />
            <span>Premium</span>
            <h2>$ 119.00 USD</h2>
            <p className="content-ticket">
              With the Premium ticket, enjoy everything in the VIP ticket plus
              additional perks like: an affiliate program invite to FrontRow,
              expo exclusives and access to a priority Q&A session. The right
              ticket for you!
            </p>
            <button className="card-actions">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
