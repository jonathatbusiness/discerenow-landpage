"use client";

import Link from "next/link";
import { useState } from "react";

import { useI18n } from "@/providers/I18nProvider";

export default function Header() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dn-bg/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-discere-now.png"
            alt="DiscereNow"
            className="h-8 w-auto"
          />

          <span className="text-lg font-semibold tracking-tight">
            DiscereNow
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
          <a className="transition hover:text-white" href="#about">
            {t.nav.about}
          </a>

          <a className="transition hover:text-white" href="#addin">
            {t.nav.addin}
          </a>

          <a className="transition hover:text-white" href="#studio">
            {t.nav.studio}
          </a>

          <a className="transition hover:text-white" href="#download">
            {t.nav.download}
          </a>

          <Link className="transition hover:text-white" href="/privacy">
            {t.nav.privacy}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-dn-bg px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-white/80">
            <a href="#about" onClick={() => setIsOpen(false)}>
              {t.nav.about}
            </a>

            <a href="#addin" onClick={() => setIsOpen(false)}>
              {t.nav.addin}
            </a>

            <a href="#studio" onClick={() => setIsOpen(false)}>
              {t.nav.studio}
            </a>

            <a href="#download" onClick={() => setIsOpen(false)}>
              {t.nav.download}
            </a>

            <Link href="/privacy" onClick={() => setIsOpen(false)}>
              {t.nav.privacy}
            </Link>

            <button
              type="button"
              onClick={toggleLocale}
              className="mt-2 w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
            >
              {locale === "en" ? "PT" : "EN"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
