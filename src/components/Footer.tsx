import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gradient-to-r from-dn-bg via-dn-bg to-[#1e1b4b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-discere-now.png" alt="DiscereNow" className="h-5" />
          <span>
            © {new Date().getFullYear()} DiscereNow — Developed by Jonatha
            Teixeira
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>

          <a
            href="https://github.com/jonathatbusiness/discerenow-addin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
