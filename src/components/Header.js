// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Make sure to import your CSS file

const Header = () => {
  return (
    <div className="header">
      <h1>Medication Reminder App</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/medications">Medications</Link>
        </li>
        <li className="nav-item">
          <Link to="/reminders">Reminders</Link>
        </li>
        {/* Add the new navigation link for MentalHealth */}
        <li className="nav-item">
          <Link to="/mental-health">Mental Health</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
