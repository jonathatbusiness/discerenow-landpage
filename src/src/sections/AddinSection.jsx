import { FiFileText, FiCheckSquare, FiType } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Sections.css";

const icons = [<FiType />, <FiCheckSquare />, <FiFileText />];

export default function AddinSection() {
  const { t } = useI18n();

  return (
    <section id="addin" className="dn-section">
      <div className="dn-section-header">
        <span className="dn-section-kicker">{t.addin.kicker}</span>
        <h2 className="dn-section-title">{t.addin.title}</h2>
        <p className="dn-section-text">{t.addin.description}</p>
      </div>

      <div className="dn-grid">
        {t.addin.cards.map((card, index) => (
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
