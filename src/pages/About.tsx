import React from "react";
import "../style/About.css";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <div className="About_about_EJ">
      <h2 className="About_about_heading animate-in">About Me</h2>
      <div className="About_about_container">
        <div className="About_about_container_card animate-in">
          <h3 className="About_about_Title">Past</h3>
          <p className="About_about_p">
            I discovered my passion for programming when I was just 14 years
            old. At first, it was just a hobby, but I quickly became interested
            in web development and the creative possibilities it offers. Over
            the years, I continued to develop my skills and fell more in love
            with building websites.
          </p>
        </div>
        <div className="About_about_container_card animate-in">
          <h3 className="About_about_Title">Present</h3>
          <p className="About_about_p">
            Now, as a software engineering student at Springboard, I am pursuing
            my dream of becoming a professional programmer. I also work as a
            freelance web developer, which has allowed me to apply my skills in
            real-world projects and gain practical experience.
          </p>
        </div>
        <div className="About_about_container_card animate-in">
          <h3 className="About_about_Title">Future</h3>
          <p className="About_about_p">
            Looking ahead, I'm excited about the future of programming and the
            endless opportunities it presents. I'm confident that my passion for
            the field, coupled with my skills, will enable me to make meaningful
            contributions to the industry in the years to come.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};
