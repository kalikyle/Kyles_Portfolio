import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MatrixBackground from './styles/matrix';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  const [fillStyle, setFillStyle] = useState("#0F0"); // Default fillStyle
  const location = useLocation();

  useEffect(() => {
    // Change fillStyle based on the current path
    switch (location.pathname) {
      case '/':
        setFillStyle("#00F"); // Green for Home
        break;
      case '/about':
        setFillStyle("#0F0"); // Red for About
        break;
      case '/projects':
        setFillStyle("#F00"); // Blue for Projects
        break;
      case '/certificates':
        setFillStyle("#FF0"); // Yellow for Certificates
        break;
      case '/contact':
        setFillStyle("#0FF"); // Cyan for Contact
        break;
      default:
        setFillStyle("#0F0"); // Default fillStyle
    }
  }, [location.pathname]); // Run effect when the pathname changes
  return (
    <>
    
      <MatrixBackground fillStyle={fillStyle} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
