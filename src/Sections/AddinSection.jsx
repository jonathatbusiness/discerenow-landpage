import { FiFileText, FiCheckSquare, FiType } from "react-icons/fi";
import "./Sections.css";

export default function AddinSection() {
  return (
    <section id="addin" className="dn-section">
      <div className="dn-section-header">
        <span className="dn-section-kicker">Microsoft Word Add-in</span>
        <h2 className="dn-section-title">
          Write in Word. Keep the structure machines can understand.
        </h2>
        <p className="dn-section-text">
          DiscereNow Template Builder helps authors format learning documents
          according to predefined rules. The result is a Word file that remains
          human-friendly, but also becomes ready for automated processing by
          DiscereNow Studio.
        </p>
      </div>

      <div className="dn-grid">
        <article className="dn-card">
          <div className="dn-card-icon">
            <FiType />
          </div>
          <h3>Authoring templates</h3>
          <p>
            Apply consistent styles for titles, lessons, sections, activities,
            and learning content blocks.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiCheckSquare />
          </div>
          <h3>Cleaner handoff</h3>
          <p>
            Prepare documents that reduce ambiguity between content writers,
            reviewers, and developers.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiFileText />
          </div>
          <h3>Word-native workflow</h3>
          <p>
            Use a familiar environment while building content that can evolve
            into interactive courses.
          </p>
        </article>
      </div>
    </section>
  );
}
