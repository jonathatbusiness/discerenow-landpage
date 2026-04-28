import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiPackage } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="dn-hero">
      <motion.div
        className="dn-hero-content"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="dn-eyebrow">
          Word-to-SCORM learning content pipeline
        </span>

        <h1>
          Build structured learning content in Word. Turn it into SCORM-ready
          courses.
        </h1>

        <p>
          DiscereNow connects document-based course writing with automated
          e-learning production. Create clean instructional content in Microsoft
          Word, process it in DiscereNow Studio, and export web or SCORM
          packages faster.
        </p>

        <div className="dn-hero-actions">
          <a href="#download" className="dn-primary-button">
            Get beta access <FiArrowRight />
          </a>
          <a href="#about" className="dn-secondary-button">
            See how it works
          </a>
        </div>
      </motion.div>

      <motion.div
        className="dn-hero-card"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="dn-flow-item">
          <FiFileText />
          <span>Microsoft Word</span>
        </div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item">
          <span className="dn-flow-logo">D</span>
          <span>DiscereNow Studio</span>
        </div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item">
          <FiPackage />
          <span>SCORM / Web Export</span>
        </div>
      </motion.div>
    </section>
  );
}
