import React from 'react'
import { useEffect, useState } from "react";
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'
import BackToTop from '../components/BackToTop'

import { motion } from 'framer-motion'

// data filled from your uploaded PDF
const profile = {
  name: 'Kyle Pintor',
  email: 'pkyle232@gmail.com',
  phone: '+63 920 454 3934',
  linkedin: 'https://www.linkedin.com/in/kyle-pintor-8a17a417b/',
  github: 'https://github.com/kalikyle',
  location: 'Philippines',
  summary: `Cum Laude — STI Global City (Class of 2025). Metrobank STRONG Scholar (2023–2025) and Pasig City Scholar (2018–2025). Award-winning capstone projects in game development and strong backend experience with Java and Spring Boot.`
}

const skills = [
  { name: 'Spring Boot', percent: '90%' },
  { name: 'API Development', percent: '88%' },
  { name: 'Apache Kafka', percent: '80%' },
  { name: 'Java', percent: '92%' },
  { name: 'C# & Unity', percent: '78%' },
  { name: 'SQL / H2', percent: '75%' }
]

export default function Home(){
const [projects, setProjects] = useState([]);

  useEffect(() => {
  fetch("https://api.github.com/users/kalikyle/repos?sort=updated")
    .then((res) => res.json())
    .then((data) => {
      const mapped = data
        .filter(repo => !repo.fork) // Exclude forks
        .slice(0, 6) // Take only the first 6 most recently updated
        .map((repo) => ({
          title: repo.name,
          desc: repo.description || "No description provided.",
          tags: [repo.language || "N/A"],
          links: [
            { label: "Source", href: repo.html_url },
            repo.homepage
              ? { label: "Live", href: repo.homepage }
              : null
          ].filter(Boolean),
          thumb: `https://opengraph.githubassets.com/${repo.id}/kalikyle/${repo.name}`,
          id: repo.id,
          name: repo.name
        }));
      setProjects(mapped);
    })
    .catch((err) => console.error(err));
}, []);



  return (
    <div className="site">
     

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <motion.h2 initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>Hello — I’m <span className="accent">Kyle</span>.</motion.h2>
            <motion.p className="lead" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>{profile.summary}</motion.p>

            <div className="cta-row">
              <a className="btn" href="#projects" onClick={(e)=>{ e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) }}>See Projects</a>
              <a className="btn ghost" href="#contact" onClick={(e)=>{ e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }}>Contact Me</a>
            </div>

            <ul className="quick-links">
              <li><strong>Location:</strong> {profile.location}</li>
              <li><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/kyle-pintor-8a17a417b</a></li>
              <li><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">github.com/kalikyle</a></li>
            </ul>
          </div>

<div className="hero-card glass">
  <div className="kp">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQH2mruJ1y26fQ/profile-displayphoto-scale_200_200/B56Zhod3sFHUAc-/0/1754099319623?e=1757548800&v=beta&t=YD2lbAxa0xYEQe891IJa72dWFF4wxLU8B7EUf6svTbA"
      alt="Kyle Pintor"
      className="profile-img"
    />
  </div>
  <div className="meta">
    <div className="meta-line"><strong>STI Alumni</strong></div>
    <div className="meta-line">Metrobank STRONG Scholar • Pasig City Scholar</div>
    <div className="meta-line">Incoming Java Backend Developer (Metrobank internship experience)</div>
  </div>
</div>
        </section>

        <section id="about" className="panel">
          <h3>About</h3>
          <p className="muted">Summary & Honors</p>
          <p>Cum Laude — STI Global City (Class of 2025). Metrobank STRONG Scholar (2023–2025) and Pasig City Scholar (2018–2025). Recognized for academic excellence and award-winning capstone projects in game development.</p>
          <ul className="honors">
            <li>People's Choice — PCRush Adventures (STI Global City Capstone Project, 2024)</li>
            <li>YGG Game Jam 2023 — Top 10 Placer</li>
            <li>YGG Game Jam 2024 — 2nd Placer</li>
            <li>Academic Excellence — Arellano University (GWA 95.8%)</li>
          </ul>
        </section>

        <section id="projects" className="panel projects">
      <h3>Selected Projects</h3>
      <p className="muted">
        A few highlights — click to view source or demo.
      </p>

      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>


        <section id="skills" className="panel">
          <h3>Skills</h3>
          <p className="muted">Top technical skills and certifications</p>

          <div className="skills-grid">
            {skills.map(s=> <SkillBar key={s.name} name={s.name} percent={s.percent} />)}
          </div>

          <div className="certs">
            <h4>Certifications</h4>
            <ul>
              <li>Java Fundamentals Course — Completion</li>
              <li>Java (Basic) — Certificate</li>
              <li>SQL (Basic) — Certificate</li>
              <li>CSS (Basic) — Certificate</li>
              <li>JavaScript (Basic) — Certificate</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="panel">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="entry">
              <div className="time">August 2025 —Present</div>
              <div className="detail">
                <h4>Java Developer — Metrobank</h4>
                <p>Internship — worked on backend Java services and supported integrations. Gained practical experience with enterprise-grade systems.</p>
              </div>
            </div>
            <div className="entry">
              <div className="time">Feb 2025 — May 2025</div>
              <div className="detail">
                <h4>Java Developer (Intern) — Metrobank</h4>
                <p>Internship — worked on backend Java services and supported integrations. Gained practical experience with enterprise-grade systems.</p>
              </div>
            </div>
          </div>

          <h4>Education</h4>
          <ul className="education">
            <li><strong>STI College</strong> — Bachelor's degree, Information Technology (Sept 2021 — July 2025). Cum Laude.</li>
            <li><strong>Arellano University</strong> — Information & Communication Technology, Information Technology (June 2019 — March 2021).</li>
            <li><strong>Nagpayong High School</strong> — High School Diploma (2015 — 2019).</li>
          </ul>
        </section>

        <section id="contact" className="panel contact">
          <h3>Contact</h3>
          <p className="muted">Want to work together or see the code? Reach out.</p>

          <div className="contact-grid">
            <div>
              <p><strong>Email</strong><br /><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><strong>Phone</strong><br /><a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
              <p><strong>LinkedIn</strong><br /><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/kyle-pintor-8a17a417b</a></p>
              <p><strong>GitHub</strong><br /><a href={profile.github} target="_blank" rel="noreferrer">github.com/kalikyle</a></p>
            </div>

            <form className="contact-form glass" action="https://formspree.io/f/your-form-id" method="POST">
              <label>Name<input type="text" name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Message<textarea name="message" rows="5" required></textarea></label>
              <button className="btn" type="submit">Send message</button>
            </form>
          </div>
        </section>

      </main>
      <BackToTop />
    </div>
  )
}
