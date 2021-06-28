import React from "react";
import logo from "./../../assets/logo.png";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo"></img>
        <p className="flash-logo-text">FLASHTYPE</p>
      </div>
      <div className="nav-left">
        <a
          target="_blank"
          className="nav-link"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vibhusharma8447/"
        >
          Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
