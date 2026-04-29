import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="dn-header">
      <Link to="/" className="dn-logo" onClick={closeMenu}>
        <img
          className="dn-logo-image"
          src="/logo-discere-now.png"
          alt="DiscereNow logo"
        />
        <span>DiscereNow</span>
      </Link>

      <button
        className="dn-menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`dn-nav ${isOpen ? "is-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#addin" onClick={closeMenu}>
          Add-in
        </a>
        <a href="#studio" onClick={closeMenu}>
          Studio
        </a>
        <a href="#download" onClick={closeMenu}>
          Download
        </a>
        <Link to="/privacy" onClick={closeMenu}>
          Privacy
        </Link>
      </nav>
    </header>
  );
}
