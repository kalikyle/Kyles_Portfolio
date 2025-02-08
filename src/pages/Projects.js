import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/global.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kalikyle/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects = data.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "No description available",
          github: repo.html_url,
          demo: repo.homepage || repo.html_url, // Uses the homepage URL if available, otherwise GitHub link
        }));
        setProjects(filteredProjects);
      })
      .catch((error) => console.error("Error fetching GitHub projects:", error));
  }, []);

  return (

    <motion.section 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
