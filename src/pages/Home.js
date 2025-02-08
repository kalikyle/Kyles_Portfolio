import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/global.css";

const Home = () => {
  return (
    <motion.section 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-background"></div>
      <div className="home-content">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQHO3v0mLSnR1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687601071131?e=1744243200&v=beta&t=mDn47ewGdUdS550MO4_nf4u_MItIhf0B93Odh5BKaYw" 
          alt="Profile" 
          className="circular-frame" 
        />
        <h1>Hi, I'm Kyle Tadiaque Pintor</h1>
        <h2 className="job-title">Developer Intern</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook  color="white" fontSize="1.5em"/></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  color="white" fontSize="1.5em"/></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub  color="white" fontSize="1.5em"/></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin  color="white" fontSize="1.5em"/></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
