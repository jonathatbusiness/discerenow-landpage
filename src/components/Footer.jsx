import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="dn-footer">
      <div>
        <strong>DiscereNow</strong>
        <p>Structured learning content. Faster course production.</p>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <a href="mailto:your@email.com">Contact</a>
      </nav>
    </footer>
  );
}
