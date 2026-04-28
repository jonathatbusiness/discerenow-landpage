import { FiGlobe, FiPackage, FiSliders } from "react-icons/fi";
import "./Sections.css";

export default function StudioSection() {
  return (
    <section id="studio" className="dn-section dn-section-dark">
      <div className="dn-section-header">
        <span className="dn-section-kicker">DiscereNow Studio</span>
        <h2 className="dn-section-title">
          From structured documents to publishable learning experiences.
        </h2>
        <p className="dn-section-text">
          DiscereNow Studio reads structured content created with the add-in and
          transforms it into responsive course experiences. It is the production
          layer where content becomes a web-based or SCORM-ready learning
          package.
        </p>
      </div>

      <div className="dn-grid">
        <article className="dn-card">
          <div className="dn-card-icon">
            <FiSliders />
          </div>
          <h3>Course assembly</h3>
          <p>
            Organize chapters, lessons, text blocks, images, and learning
            sections into a coherent course.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiGlobe />
          </div>
          <h3>Translation-ready</h3>
          <p>
            Support multilingual content workflows by structuring learning
            material before export.
          </p>
        </article>

        <article className="dn-card">
          <div className="dn-card-icon">
            <FiPackage />
          </div>
          <h3>SCORM and web export</h3>
          <p>
            Generate packages for LMS delivery or standalone web-based learning
            experiences.
          </p>
        </article>
      </div>
    </section>
  );
}
