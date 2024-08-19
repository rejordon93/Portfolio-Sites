import React from "react";
import "../style/Contact.css";

export const Contact = () => {
  return (
    <div className="Contact_contact">
      <h2 className="Contact_contact_title">Want To</h2>
      <div className="Contact_contact_container">
        <div className="Contact_contact_container_card">
          <h3 className="Contact_contact_container_card_title">
            Offer a Job Opportunity?
          </h3>
          <p className="Contact_contact_container_card_text">
            I am open to discussing potential job opportunities or
            collaborations. With experience in web development and software
            engineering, I am interested in roles that allow me to work on
            exciting and challenging projects. If you have a project or role in
            mind, feel free to reach out and let's discuss!
          </p>
        </div>
        <div className="Contact_contact_container_card">
          <h3 className="Contact_contact_container_card_title">Connect?</h3>
          <p className="Contact_contact_container_card_text">
            Networking is key in the tech industry, and I'm always looking to
            meet new people and expand my professional circle. Whether you're a
            fellow developer, designer, or entrepreneur, I'd love to chat and
            learn more about your work. Let's grab a virtual coffee and see
            where the conversation takes us!
          </p>
        </div>
        <div className="Contact_contact_container_card">
          <h3 className="Contact_contact_container_card_title">
            Build Something?
          </h3>
          <p className="Contact_contact_container_card_text">
            I have a passion for developing innovative web applications that
            solve complex problems. Whether it's building a custom e-commerce
            platform or a cutting-edge web app, I'm always ready for a new
            challenge. Let's create something amazing together!
          </p>
        </div>
        <a href="/email">Email</a>
        <a href="/email">GitHub</a>
        <a href="/email">Linkedin</a>
        <a href="/email">Resume</a>
      </div>
    </div>
  );
};
