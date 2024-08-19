import React from "react";
import "../style/Skills.css";
import { Contact } from "./Contact";

export const Skills = () => {
  return (
    <div className="Skills_skills">
      <h2 className="Skills_skills_title">Skills</h2>
      <div className="Skills_skills_container">
        <div className="Skills_skills_container_category">
          <h3 className="Skills_skills_container_category_title">Front End</h3>
          <div className="Skills_skills_container_category_skillsContainer">
            <div className="Skills_skills_container_category_skillsContainer_skill">
              HTML
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              JavaScript
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              TypeScript
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              React
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Redux
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              React Context
            </div>
          </div>
        </div>
        <div className="Skills_skills_container_category">
          <h3 className="Skills_skills_container_category_title">
            Styling & Design
          </h3>
          <div className="Skills_skills_container_category_skillsContainer">
            <div className="Skills_skills_container_category_skillsContainer_skill">
              CSS
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              BootStrap
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Semantic UI React
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Tailwind CSS
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Figma
            </div>
          </div>
        </div>
        <div className="Skills_skills_container_category">
          <h3 className="Skills_skills_container_category_title">Backend</h3>
          <div className="Skills_skills_container_category_skillsContainer">
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Node JS
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Python
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Flask
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              Express
            </div>
            <div className="Skills_skills_container_category_skillsContainer_skill">
              PostgreSQL
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
