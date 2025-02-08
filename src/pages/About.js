import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    className="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <h1>SKILLSETS</h1>
      <h3>Aspiring Programmer who just want to be Successful in Life. LOL</h3>
      <div className="about-grid">
        <div className= "Languages">
            <h3>Languages and Platforms</h3>
            <ul>
                <li>Java</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>VisualBasics</li>
                <li>Unity</li>
            </ul>
        </div>
        <div className= "Databases">
        <h3>Databases</h3>
            <ul>
                <li>Google Firebase</li>
                <li>Mongo DB</li>
                <li>SQL</li>
            </ul>
        </div>
        <div className= "Frameworks">
        <h3>Frameworks</h3>
            <ul>
                <li>.NET</li>
                <li>ASP.NET</li>
                <li>React.JS</li>
            </ul>
        </div>
        <div className= "Non-Technical">
        <h3>Non-Technical Skills</h3>
            <ul>
                <li>Agile(SDLC)</li>
                <li>Requirements Gathering</li>
                <li>Diagrams</li>
                <li>Testing</li>
                <li>Deployment</li>
            </ul>
        </div>
        <div className= "Other-Skills">
        <h3>Other Skills</h3>
            <ul>
                <li>SAP Business One</li>
                <li>Computer Hardware Installation and Upgrade</li>
                <li>Basic Computer Troubleshooting</li>
            </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
