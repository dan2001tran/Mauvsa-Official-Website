import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <form className="footer-contact-form">
          <div className="footer-form-group">
            <label className="footer-label" htmlFor="name">Name</label>
            <input className="footer-input" type="text" id="name" name="name" required />
          </div>
          <div className="footer-form-group">
            <label className="footer-label" htmlFor="email">Email</label>
            <input className="footer-input" type="email" id="email" name="email" required />
          </div>
          <div className="footer-form-group">
            <label className="footer-label" htmlFor="message">Message</label>
            <textarea className="footer-textarea" id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="footer-submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;

