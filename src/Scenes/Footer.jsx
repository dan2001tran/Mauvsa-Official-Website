import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Links"></div>
      <img></img>
      <img></img>
      <img></img>
      <img></img>
      <div className="Footer-Form">
        <form>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>

          <label>
            Subject:
            <input type="text" name="subject" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
