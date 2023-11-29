import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="d-flex fluid navbar px-5 py-3 nav ">
      <img src={logo} alt="logo" style={{ height: "3rem" }} />
      <ul
        className="d-flex align-center"
        style={{ color: "white", listStyle: "none" }}
      >
        <a href="#home">
          <li className="mx-4 fs-5 head-item">Home</li>
        </a>
        <a href="#about">
          <li className="mx-4 fs-5 head-item">About</li>
        </a>
        <a href="#contact">
          <li className="mx-4 fs-5 head-item">Contact</li>
        </a>
      </ul>

      <button
        className="login-butt px-4 py-1 fs-5 rounded"
        style={{ color: "white", textTransform: "uppercase", border: "none" }}
      >
        Sign in
      </button>
    </div>
  );
};

export default Header;
