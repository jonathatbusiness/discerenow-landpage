import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Sections.css";
import "./DownloadSection.css";

const STUDIO_DOWNLOAD_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases/download/v0.1.0/DiscereNow.Studio.v0.1.0.zip";

const ADDIN_MANIFEST_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases/download/v1.0.0/manifest.xml";

const RELEASES_URL =
  "https://github.com/jonathatbusiness/discerenow-addin/releases";

export default function DownloadSection() {
  const { t } = useI18n();

  return (
    <section id="download" className="dn-section dn-download-section">
      <div className="dn-section-header">
        <span className="dn-section-kicker">{t.download.kicker}</span>
        <h2 className="dn-section-title">{t.download.title}</h2>
        <p className="dn-section-text">{t.download.description}</p>
      </div>

      <div className="dn-download-grid">
        <article className="dn-download-card">
          <h3>{t.download.addinTitle}</h3>
          <p>{t.download.addinDescription}</p>
          <a className="dn-primary-button" href={ADDIN_MANIFEST_URL} target="_blank" rel="noopener noreferrer">
            {t.download.addinCta} <FiFileText />
          </a>
        </article>

        <article className="dn-download-card featured">
          <h3>{t.download.studioTitle}</h3>
          <p>{t.download.studioDescription}</p>
          <a className="dn-primary-button" href={STUDIO_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            {t.download.studioCta} <FiDownload />
          </a>
        </article>
      </div>

      <div className="dn-download-footer">
        <p>{t.download.releasesDescription}</p>
        <a className="dn-secondary-link" href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
          {t.download.releasesCta} <FiExternalLink />
        </a>
      </div>
    </section>
  );
}
