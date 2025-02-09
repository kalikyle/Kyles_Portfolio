import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
  <div className="Email">
  <img src={`${process.env.PUBLIC_URL}/Resources/SITE LOGO.png`} alt="KaliKyle Logo" className="site-logo" />
  </div>
  <div className="Pages">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/certificates">Certificates</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="Socials">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook  color="white" fontSize="1.5em"/></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  color="white" fontSize="1.5em"/></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub  color="white" fontSize="1.5em"/></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin  color="white" fontSize="1.5em"/></a>
  </div>
</div>
  );
};

export default Navbar;
