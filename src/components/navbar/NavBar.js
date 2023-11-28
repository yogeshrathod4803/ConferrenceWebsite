// Navbar.js
import React, { useState } from "react";
import Line from "../../asssets/Line 1.png";
import Cart from "../../asssets/shoppingcart.png";

import "../navbar/NavBar.css";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="logo">descon</div>
      <ul className="menu-list">
        <li className="menu-item">Event</li>
        <li className="menu-item">Schedule</li>
        <li className="menu-item">Speakers</li>
        <li className="menu-item">Sponsors</li>
      </ul>
      <a href="goodle.com" className="cart-button1">
        <img src={Cart} alt="cart" />
      </a>
      <button className="cart-button">Get tickets</button>

      <button className="drawer-button" onClick={toggleDrawer}>
        <img src={Line} alt="drawerBtn" className="drawer-btn" />
        <img src={Line} alt="drawerBtn" className="drawer-btn" />
        <img src={Line} alt="drawerBtn" className="drawer-btn" />
      </button>

      <div className={`drawer-content ${isDrawerOpen ? "show" : ""}`}>
        <ul className="menu-list1">
          <li className="menu-item">Event</li>
          <li className="menu-item">Schedule</li>
          <li className="menu-item">Speakers</li>
          <li className="menu-item">Sponsors</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
