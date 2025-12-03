import React from "react";
import "./Hero.css";
import profile from "../../assets/profile-r.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <img src={profile} alt="profile-pic" />
      </div>

      <div className="hero-right">
        <h1>
          <span>Amana Samsudeen</span>
          <br></br>Software Engineer
        </h1>

        <p>
          Driven and dedicated Software Engineer with a solid foundation in
          full-stack development and hands-on experience in agile methodologies.
          Skilled in designing, developing, and optimizing scalable web
          applications while ensuring high code quality, performance, and clean
          maintainable code. I hold an MSc in Information Technology from
          Bharathiar University, India, and a BSc in Information Systems from
          the University of Colombo, Sri Lanka.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with Me
            </AnchorLink>
          </div>

          <a
            href="/resume.pdf"
            download="Amana_Samsudeen_Resume.pdf"
            className="hero-resume"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            See My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
