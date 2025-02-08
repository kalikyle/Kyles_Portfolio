import React from "react";
import { motion } from "framer-motion";
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
        <div className="certificate-card">
          <img src="https://via.placeholder.com/300" alt="Certificate" />
          <h3>Certificate Title</h3>
        </div>
      </div>
   
    </motion.div>
  );
};
export default Certificates;