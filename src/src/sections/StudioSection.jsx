import { FiGlobe, FiPackage, FiSliders } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Sections.css";

const icons = [<FiSliders />, <FiGlobe />, <FiPackage />];

export default function StudioSection() {
  const { t } = useI18n();

  return (
    <section id="studio" className="dn-section dn-section-dark">
      <div className="dn-section-header">
        <span className="dn-section-kicker">{t.studio.kicker}</span>
        <h2 className="dn-section-title">{t.studio.title}</h2>
        <p className="dn-section-text">{t.studio.description}</p>
      </div>

      <div className="dn-grid">
        {t.studio.cards.map((card, index) => (
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
