import React from "react";
import { About } from "./About";
import "../style/PortfolioHome.css"; // Import the CSS file

export const PortfolioHome = () => {
  return (
    <div className="portfolio-home">
      <div className="content-container">
        <div className="text-section">
          <h1 className="greeting">Hello, I am</h1>
          <h2 className="name">Ethan Jordon</h2>
          <h3 className="title">Front-End Developer</h3>

          <p className="intro-paragraph">
            I'm a passionate junior Front-End Developer based in Seattle, WA,
            currently studying Software Engineering with a strong interest in
            Web Development. I'm committed to creating visually stunning and
            user-friendly websites, and I'm looking forward to exploring new
            opportunities to enhance my skills.
          </p>

          <a
            href="Docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Get my resume
          </a>
        </div>
        <div className="image-section">
          {/* Placeholder for your image */}
          <img
            src="path/to/your/image.jpg"
            alt="IMG! COMING SOON"
            className="profile-image"
          />
        </div>
      </div>
      <About />
    </div>
  );
};
