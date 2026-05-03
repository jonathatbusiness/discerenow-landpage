"use client";

import { Download, ExternalLink, FileDown } from "lucide-react";

import { useI18n } from "@/providers/I18nProvider";

export default function DownloadSection() {
  const { t } = useI18n();

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.24),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.22),transparent_36%),linear-gradient(135deg,#e0f7ff_0%,#ffffff_45%,#ffeaf5_100%)] py-28 text-dn-text"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-pink">
            {t.download.eyebrow}
          </p>

          <h2 className="mt-5 max-w-4xl text-[2.6rem] font-black leading-[1.08] tracking-[-0.04em] text-dn-text">
            {t.download.title}
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-dn-muted">
            {t.download.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-dn-border bg-white p-8 shadow-dn-soft">
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
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-black text-white shadow-dn transition hover:-translate-y-0.5"
            >
              <span className="text-white">{t.download.addinCard.cta}</span>
              <FileDown className="h-4 w-4 text-white" />
            </a>
          </article>

          <article className="rounded-[1.75rem] bg-dn-bg p-8 text-white shadow-dn">
            <h3 className="text-2xl font-black tracking-[-0.04em]">
              {t.download.studioCard.title}
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
              {t.download.studioCard.description}
            </p>

            <a
              href="https://github.com/jonathatbusiness/discerenow-addin/releases/download/v0.1.0/DiscereNow.Studio.v0.1.0.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-black text-white shadow-dn transition hover:-translate-y-0.5"
            >
              {t.download.studioCard.cta}
              <Download className="h-4 w-4" />
            </a>
          </article>
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-dn-text">{t.download.releasesText}</p>

          <a
            href="https://github.com/jonathatbusiness/discerenow-addin/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 text-base font-black text-dn-text transition hover:text-dn-blue"
          >
            {t.download.releasesCta}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
