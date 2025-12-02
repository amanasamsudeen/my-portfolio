import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projectList = [
    {
      title: "XAPI – API Management Tool",
      description:
        "A web platform that helps developers manage, monitor, and integrate APIs efficiently.",
      tech: "Angular, Spring Boot, MongoDB, REST API",
      link: "https://xapihub.io/",
    },
    {
      title: "PetSo – Social Platform for Animal Welfare",
      description:
        "A platform connecting users with animal welfare organizations for pet adoption and support.",
      tech: "PHP, SCSS, HTML, MySQL",
      link: "https://github.com/PetSo-IS06",
    },
    {
      title: "SMECO – Loyalty Management System",
      description:
        "A full-stack application enabling businesses to manage customer loyalty and marketing interactions.",
      tech: "React.js, Node.js, Express.js, Sequelize ORM, MySQL, Tailwind CSS",
      link: "https://github.com/SME-CO",
    },
    {
      title: "ShieldCare – Parental Control App",
      description:
        "A web app designed to reduce children's mobile screen time through monitoring and restrictions.",
      tech: "React.js, FastAPI, Firebase",
      link: "https://github.com/amanasamsudeen/shield-care",
    },
    {
      title: "Prescripto – Doctor Appointment System",
      description: "A full-stack medical appointment booking system.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      link: "https://github.com/amanasamsudeen/Prescripto",
    },
    {
      title: "Gemini-AI – AI-Powered Chatbot using google's AI studio",
      description:
        "An AI chatbot integrated into web applications to enhance user interaction using Gemini API clone.",
      tech: "React.js, Gemini API, Tailwind CSS",
      link: "https://github.com/amanasamsudeen/Gemini-AI",
    },
  ];

  return (
    <div id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">
              <strong>Technologies:</strong> {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
