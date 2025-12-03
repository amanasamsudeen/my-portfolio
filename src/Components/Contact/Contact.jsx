import React from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

import { FaGithub, FaLinkedin, FaMedium, FaBehance } from "react-icons/fa";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0ccd1558-c1e2-45f3-9258-189cf1fcb3ab");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h3>Connect with me</h3>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's Talk</h3>
          <p>I'm currently available to take new projects.</p>

          <div className="contact-details">
            <div className="contat-item">
              <img className="mail-icon" src={mail_icon} alt="" />
              <p>amanasamsudeen@gmail.com</p>
            </div>

            <div className="contat-item icon-link">
              <FaGithub className="social-icon" />
              <a
                href="https://github.com/amanasamsudeen"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="contat-item icon-link">
              <FaLinkedin className="social-icon" />
              <a
                href="https://www.linkedin.com/in/amanasamsudeen/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="contat-item icon-link">
              <FaMedium className="social-icon" />
              <a
                href="https://medium.com/@amanasamsudeen"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </div>

            <div className="contat-item icon-link">
              <FaBehance className="social-icon" />
              <a
                href="https://www.behance.net/750cd3bd"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </div>

            <div className="contat-item">
              <img className="mail-icon" src={phone_icon} alt="" />
              <p>+94 776197741</p>
            </div>

            <div className="contat-item">
              <img className="mail-icon" src={location_icon} alt="" />
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
