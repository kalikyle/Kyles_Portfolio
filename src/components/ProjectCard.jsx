// =================== src/components/ProjectCard.jsx ===================
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tags, links, thumb, id, name}) {
  return (
    <motion.article
      className="card project glass"
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="thumb">
        {thumb ? <img src={thumb} alt={title} /> : "🔧"}
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="card-actions">
          {links?.map((l) => (
            <a
              key={l.label}
              className="link"
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
