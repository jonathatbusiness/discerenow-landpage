import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import "./Sections.css";
import "./DownloadSection.css";

const STUDIO_DOWNLOAD_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases/download/v0.1.0/DiscereNow.Studio.v0.1.0.zip";

const ADDIN_MANIFEST_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases/download/v1.0.0/manifest.xml";

const RELEASES_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases";

export default function DownloadSection() {
  return (
    <section id="download" className="dn-section dn-download-section">
      <div className="dn-section-header">
        <span className="dn-section-kicker">Beta access</span>
        <h2 className="dn-section-title">
          Start building courses with DiscereNow
        </h2>
        <p className="dn-section-text">
          Install the Word add-in to structure your learning content, then use
          DiscereNow Studio Beta to generate and export your course as SCORM or
          web.
        </p>
      </div>

      <div className="dn-download-grid">
        <article className="dn-download-card">
          <h3>DiscereNow Template Builder (Word Add-in)</h3>
          <p>
            Download the manifest XML and install the add-in in Microsoft Word
            to start structuring your learning content.
          </p>
          <a
            className="dn-primary-button"
            href={ADDIN_MANIFEST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Add-in XML <FiFileText />
          </a>
        </article>

        <article className="dn-download-card featured">
          <h3>DiscereNow Studio (Beta)</h3>
          <p>
            Import structured Word documents, apply themes and export your
            course as SCORM or web.
          </p>
          <a
            className="dn-primary-button"
            href={STUDIO_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Studio Beta <FiDownload />
          </a>
        </article>
      </div>

      <div className="dn-download-footer">
        <p>
          Need setup instructions or want to see all versions? Check the
          releases page.
        </p>
        <a
          className="dn-secondary-link"
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View releases and instructions <FiExternalLink />
        </a>
      </div>
    </section>
  );
}
