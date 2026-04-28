import { FiDownload, FiExternalLink } from "react-icons/fi";
import "./Sections.css";
import "./DownloadSection.css";

export default function DownloadSection() {
  return (
    <section id="download" className="dn-section dn-download-section">
      <div className="dn-section-header">
        <span className="dn-section-kicker">Beta access</span>
        <h2 className="dn-section-title">
          Start testing the DiscereNow workflow.
        </h2>
        <p className="dn-section-text">
          Download links will be added soon. The Word add-in is intended to be
          available through Microsoft AppSource, while DiscereNow Studio beta
          will be available for testing as a separate app.
        </p>
      </div>

      <div className="dn-download-grid">
        <article className="dn-download-card">
          <h3>DiscereNow Template Builder</h3>
          <p>
            Install the Microsoft Word add-in and start preparing structured
            learning documents.
          </p>
          <a
            className="dn-primary-button disabled-link"
            href="#"
            aria-disabled="true"
          >
            Add-in link coming soon <FiExternalLink />
          </a>
        </article>

        <article className="dn-download-card featured">
          <h3>DiscereNow Studio Beta</h3>
          <p>
            Test the course generation workflow and export structured content to
            web or SCORM packages.
          </p>
          <a
            className="dn-primary-button disabled-link"
            href="#"
            aria-disabled="true"
          >
            Studio beta coming soon <FiDownload />
          </a>
        </article>
      </div>
    </section>
  );
}
