"use client";

import { Download, ExternalLink, FileDown } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/providers/I18nProvider";

export default function DownloadSection() {
  const { t } = useI18n();

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.24),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.22),transparent_36%),linear-gradient(135deg,#e0f7ff_0%,#ffffff_45%,#ffeaf5_100%)] py-24 text-dn-text sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-pink">
            {t.download.eyebrow}
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.04em] text-dn-text sm:text-[2.6rem]">
            {t.download.title}
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-dn-muted sm:text-lg">
            {t.download.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <article className="h-full rounded-[1.5rem] border border-dn-border bg-white p-6 shadow-dn-soft transition duration-300 hover:-translate-y-1.5 hover:border-dn-blue/30 hover:shadow-dn sm:rounded-[1.75rem] sm:p-8">
              <h3 className="text-2xl font-black tracking-[-0.04em] text-dn-text">
                {t.download.addinCard.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-dn-muted">
                {t.download.addinCard.description}
              </p>

              <a
                href="https://github.com/jonathatbusiness/discerenow-addin/releases/download/v1.0.0/DiscereNow_Addin_Installer.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-black text-white shadow-dn transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(139,92,246,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan sm:w-auto"
                aria-label={t.download.addinCard.cta}
              >
                <span className="text-white">{t.download.addinCard.cta}</span>
                <FileDown className="h-4 w-4 text-white" />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-[1.5rem] bg-dn-bg p-6 text-white shadow-dn transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(15,23,42,0.28)] sm:rounded-[1.75rem] sm:p-8">
              <h3 className="text-2xl font-black tracking-[-0.04em]">
                {t.download.studioCard.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                {t.download.studioCard.description}
              </p>

              <a
                href="https://github.com/jonathatbusiness/discerenow-studio-installer/releases/download/v0.1.0/DiscereNow.Studio.v0.1.0.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-black text-white shadow-dn transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(139,92,246,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan sm:w-auto"
                aria-label={t.download.studioCard.cta}
              >
                {t.download.studioCard.cta}
                <Download className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center" delay={0.12}>
          <p className="text-base text-dn-text">{t.download.releasesText}</p>

          <a
            href="https://github.com/jonathatbusiness/discerenow-addin/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-base font-black text-dn-text transition duration-200 hover:-translate-y-0.5 hover:text-dn-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
            aria-label={t.download.releasesCta}
          >
            {t.download.releasesCta}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
