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
          E-learning authoring for Microsoft Word
        </span>

        <h1>Turn Word documents into interactive e-learning courses.</h1>

        <p>
          DiscereNow helps instructional designers structure learning content in
          Microsoft Word, review it in DiscereNow Studio, and export it as SCORM
          or web-ready courses.
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
          <span>Write in Microsoft Word</span>
        </div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item">
          <span className="dn-flow-logo">D</span>
          <span>Review in DiscereNow Studio</span>
        </div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item">
          <FiPackage />
          <span>Export as SCORM or Web</span>
        </div>
      </motion.div>
    </section>
  );
}
