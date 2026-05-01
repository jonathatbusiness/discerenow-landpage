import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useI18n } from "../i18n";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="dn-header">
      <Link to="/" className="dn-logo" onClick={closeMenu}>
        <img className="dn-logo-image" src="/logo-discere-now.png" alt="DiscereNow logo" />
        <span>DiscereNow</span>
      </Link>

      <button className="dn-menu-button" type="button" aria-label={t.header.toggleNavigation} onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`dn-nav ${isOpen ? "is-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>{t.header.about}</a>
        <a href="#addin" onClick={closeMenu}>{t.header.addin}</a>
        <a href="#studio" onClick={closeMenu}>{t.header.studio}</a>
        {/*<a href="#gallery" onClick={closeMenu}>{t.header.gallery}</a>*/}
        <a href="#download" onClick={closeMenu}>{t.header.download}</a>
        <Link to="/privacy" onClick={closeMenu}>{t.header.privacy}</Link>
      </nav>
    </header>
  );
}
