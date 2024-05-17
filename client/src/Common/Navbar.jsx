import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo-letters.png";
import hoverLogo from "../assets/logo-white.png"; // replace with your hover logo path
const Navbar = () => {
  const [logoSrc, setLogoSrc] = useState(logo);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (scrollContainer.current.scrollTop > 1) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    scrollContainer.current.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component is unmounted
    return () => {
      scrollContainer.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={scrollContainer}>
      <nav
        className={`navbar ${isHovered ? "hovered" : ""}`}
        onMouseOver={() => {
          setLogoSrc(hoverLogo);
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setLogoSrc(logo);
          setIsHovered(false);
        }}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <img src={hoverLogo} alt="Hover Logo" className="logo hover-logo" />
        </div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>

          <li className="contact">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
