import React from "react";
import { motion } from "framer-motion";
import certificates from "../Certificatedata";
import "../styles/global.css";

const Certificates = () => {
  return (
    <motion.div 
      className="certificates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>CERTIFICATES</h1>
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            <a href={certificate.image} target="_blank" rel="noopener noreferrer">
              <img className="certificate-pic" src = {certificate.image} alt={certificate.title} />
            </a>  
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            {certificate.link && (
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="view-button">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
