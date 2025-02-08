import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/global.css";
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="social-icons">
       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook  color="white" fontSize="1.5em"/></a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  color="white" fontSize="1.5em"/></a>
                 <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub  color="white" fontSize="1.5em"/></a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin  color="white" fontSize="1.5em"/></a>
      </div>
    </div>
  );
};
export default Contact;