import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiPackage } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Hero.css";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="dn-hero">
      <motion.div className="dn-hero-content" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="dn-eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.description}</p>
        <div className="dn-hero-actions">
          <a href="#download" className="dn-primary-button">{t.hero.primaryCta} <FiArrowRight /></a>
          <a href="#about" className="dn-secondary-button">{t.hero.secondaryCta}</a>
        </div>
      </motion.div>

      <motion.div className="dn-hero-card" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
        <div className="dn-flow-item"><FiFileText /><span>{t.hero.flowWord}</span></div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item"><span className="dn-flow-logo">D</span><span>{t.hero.flowStudio}</span></div>
        <div className="dn-flow-line" />
        <div className="dn-flow-item"><FiPackage /><span>{t.hero.flowExport}</span></div>
      </motion.div>
    </section>
  );
}
