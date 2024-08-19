import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"; // Import the CSS file

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="brand">
        Ethan Jordon
      </Link>
      <div className="menu">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
};
