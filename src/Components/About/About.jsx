import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <p>
            I am a passionate Software Engineer with experience in building
            scalable and user-focused web applications. My expertise spans
            full-stack development using Angular, React and Node.js.
          </p>

          <p>
            Over the years, I’ve worked on enterprise-level products, API
            management platforms, and cross-functional team projects. I focus on
            writing clean, maintainable code while ensuring high performance and
            quality through unit testing and best practices.
          </p>

          <p>
            I believe in continuous learning, teamwork, and delivering
            meaningful digital experiences that make an impact. With a strong
            academic background in IT and hands-on industry experience.
          </p>
        </div>

        <div className="about-right">
          <div className="about-para">
            <span>I’m recognized for:</span>
          </div>

          <div className="about-skills">
            <div className="skill-item">Strong problem-solving abilities</div>
            <div className="skill-item">Writing clean, maintainable code</div>
            <div className="skill-item">Quick learning and adaptability</div>
            <div className="skill-item">
              Effective collaboration across teams
            </div>
            <div className="skill-item">
              Attention to detail and code quality
            </div>
          </div>
        </div>
      </div>

      <div className="about-achivements">
        <div className="achivement-item">
          <h2>2+</h2>
          <p>Years of Industry Experience</p>
        </div>

        <div className="achivement-item">
          <h2>10+</h2>
          <p>Completed Projects</p>
        </div>

        <div className="achivement-item">
          <h2>∞</h2>
          <p>Commitment to Learning</p>
        </div>
      </div>
    </div>
  );
}

export default About;
