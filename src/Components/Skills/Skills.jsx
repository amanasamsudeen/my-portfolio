import React from "react";
import "./Skills.css";
import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiJira,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="skills">
      <h1 className="skills-title">My Tech Skills</h1>

      <div className="skills-grid">
        {/* Column 1 */}
        <div className="skills-column">
          <h2 className="category-title">Frontend</h2>
          <div className="skill-item">
            <SiAngular /> Angular
          </div>
          <div className="skill-item">
            <SiReact /> React.js
          </div>
          <div className="skill-item">
            <SiJavascript /> JavaScript
          </div>
          <div className="skill-item">
            <SiTypescript /> TypeScript
          </div>
          <div className="skill-item">
            <SiHtml5 /> HTML
          </div>
          <div className="skill-item">
            <SiCss3 /> CSS / SCSS
          </div>
          <div className="skill-item">
            <SiTailwindcss /> Tailwind CSS
          </div>

          <h2 className="category-title">Backend</h2>
          <div className="skill-item">
            <SiNodedotjs /> Node.js / Express.js
          </div>
          <div className="skill-item">
            <SiPython /> Python – FastAPI
          </div>
          <div className="skill-item">
            <SiSpringboot /> Java / Spring Boot
          </div>
        </div>

        {/* Column 2 */}
        <div className="skills-column">
          <h2 className="category-title">Databases</h2>
          <div className="skill-item">
            <SiMongodb /> MongoDB
          </div>
          <div className="skill-item">
            <SiMysql /> MySQL
          </div>
          <div className="skill-item">
            <SiFirebase /> Firebase
          </div>

          <h2 className="category-title">Tools & Others</h2>
          <div className="skill-item">
            <SiGit /> Git & GitHub
          </div>
          <div className="skill-item">
            <SiJira /> Jira
          </div>
          <div className="skill-item">
            <SiPostman /> RESTful APIs
          </div>

          <div className="skill-item">⚡ Agile Methodologies</div>
          <div className="skill-item">✔ Unit Testing</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
