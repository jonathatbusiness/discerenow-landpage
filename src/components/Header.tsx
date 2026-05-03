"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useI18n } from "@/providers/I18nProvider";

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === "en" ? "pt" : "en");
  };

  const closeMenu = () => setIsOpen(false);

  const navLinkClass =
    "rounded-full px-1 py-2 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan";

  const mobileLinkClass =
    "rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dn-cyan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dn-bg/90 text-white shadow-[0_12px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-dn-bg/75">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
          aria-label="DiscereNow home"
          onClick={closeMenu}
        >
          <img
            src="/logo-discere-now.png"
            alt="DiscereNow"
            className="h-8 w-auto"
          />

          <span className="text-lg font-semibold tracking-tight">
            DiscereNow
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-white/75 md:flex"
          aria-label="Primary navigation"
        >
          <a className={navLinkClass} href="#about">
            {t.nav.about}
          </a>

          <a className={navLinkClass} href="#addin">
            {t.nav.addin}
          </a>

          <a className={navLinkClass} href="#studio">
            {t.nav.studio}
          </a>

          <a className={navLinkClass} href="#download">
            {t.nav.download}
          </a>

          <a className={navLinkClass} href="#install">
            {t.nav.install}
          </a>

          <Link className={navLinkClass} href="/privacy">
            {t.nav.privacy}
          </Link>

          {/*<button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-dn-cyan/60 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
            aria-label={locale === "en" ? "Switch language to Portuguese" : "Switch language to English"}
          >
            {locale === "en" ? "PT" : "EN"}
          </button> */}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-dn-cyan/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed left-0 right-0 top-[72px] z-40 border-t border-white/10 bg-dn-bg/95 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="flex flex-col gap-1 px-5 py-5 text-sm font-medium text-white/80 sm:px-6"
              aria-label="Mobile navigation"
            >
              <a className={mobileLinkClass} href="#about" onClick={closeMenu}>
                {t.nav.about}
              </a>

              <a className={mobileLinkClass} href="#addin" onClick={closeMenu}>
                {t.nav.addin}
              </a>

              <a className={mobileLinkClass} href="#studio" onClick={closeMenu}>
                {t.nav.studio}
              </a>

              <a
                className={mobileLinkClass}
                href="#download"
                onClick={closeMenu}
              >
                {t.nav.download}
              </a>

              <a
                className={mobileLinkClass}
                href="#install"
                onClick={closeMenu}
              >
                {t.nav.install}
              </a>

              <Link
                className={mobileLinkClass}
                href="/privacy"
                onClick={closeMenu}
              >
                {t.nav.privacy}
              </Link>

              {/*<button
                type="button"
                onClick={toggleLocale}
                className="mt-3 w-fit rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/80 transition duration-200 hover:border-dn-cyan/60 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
                aria-label={
                  locale === "en"
                    ? "Switch language to Portuguese"
                    : "Switch language to English"
                }
              >
                {locale === "en" ? "PT" : "EN"}
              </button>*/}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
