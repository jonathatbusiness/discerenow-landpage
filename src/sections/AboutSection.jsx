import { motion } from "framer-motion";
import { FiLayers, FiRepeat, FiZap } from "react-icons/fi";
import "./Sections.css";

export default function AboutSection() {
  return (
    <section id="about" className="dn-section dn-section-soft">
      <motion.div
        className="dn-section-header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="dn-section-kicker">About the tool</span>
        <h2 className="dn-section-title">
          A smarter workflow for modern learning teams.
        </h2>
        <p className="dn-section-text">
          DiscereNow was designed for instructional designers, learning
          experience designers, and corporate training teams that need to move
          faster without losing structure. It turns Microsoft Word into the
          first step of a clean, automated course production pipeline.
        </p>
      </motion.div>

      <div className="dn-grid">
        <article className="dn-card">
          <div className="dn-card-icon">
            <FiLayers />
          </div>
          <h3>Structured by design</h3>
          <p>
            Create content with clear hierarchy, predictable formatting, and
            reusable learning patterns.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiRepeat />
          </div>
          <h3>Built for repeatability</h3>
          <p>
            Reduce manual reconstruction by preparing documents that can be
            interpreted consistently.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiZap />
          </div>
          <h3>Ready for automation</h3>
          <p>
            Connect content writing, course generation, translation, and SCORM
            export in one pipeline.
          </p>
        </article>
      </div>
    </section>
  );
}
