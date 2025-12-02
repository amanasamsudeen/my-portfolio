import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* <div className="footer-top-left">
          <p>Thank you for visiting my portfolio!.</p>
        </div> */}

        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="email-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Amana Samsudeen</p>

        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
