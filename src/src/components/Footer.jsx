import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import "./Footer.css";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="dn-footer">
      <div>
        <strong>DiscereNow</strong>
        <p>{t.footer.tagline}</p>
      </div>

      <nav>
        <Link to="/">{t.footer.home}</Link>
        <Link to="/privacy">{t.footer.privacy}</Link>
        <a href="mailto:your@email.com">{t.footer.contact}</a>
      </nav>
    </footer>
  );
}
