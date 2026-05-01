import { motion } from "framer-motion";
import { FiLayers, FiRepeat, FiZap } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Sections.css";

const icons = [<FiLayers />, <FiRepeat />, <FiZap />];

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="dn-section dn-section-soft">
      <motion.div className="dn-section-header" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="dn-section-kicker">{t.about.kicker}</span>
        <h2 className="dn-section-title">{t.about.title}</h2>
        <p className="dn-section-text">{t.about.description}</p>
      </motion.div>

      <div className="dn-grid">
        {t.about.cards.map((card, index) => (
          <article className="dn-card" key={card.title}>
            <div className="dn-card-icon">{icons[index]}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
