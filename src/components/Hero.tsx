"use client";

import Link from "next/link";
import { ArrowRight, Download, FileText, Layers } from "lucide-react";

import { useI18n } from "@/providers/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-dn-bg text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-dn-blue blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-dn-purple blur-3xl" />
        <div className="absolute bottom-[-20%] left-[35%] h-72 w-72 rounded-full bg-dn-pink blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dn-blue/30 bg-dn-blue/10 px-4 py-2 text-sm font-semibold text-dn-blue">
            <Layers className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#download"
              className="inline-flex min-w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-bold text-white shadow-dn transition hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {t.hero.primaryCta}
            </a>

            <Link
              href="/privacy"
              className="inline-flex min-w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <FileText className="h-4 w-4" />
              {t.hero.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-dn backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-4 text-dn-text">
              <div className="mb-4 flex items-center gap-2 border-b border-dn-border pb-4">
                <span className="h-3 w-3 rounded-full bg-dn-pink" />
                <span className="h-3 w-3 rounded-full bg-dn-orange" />
                <span className="h-3 w-3 rounded-full bg-dn-blue" />
              </div>

              <div className="space-y-4">
                {t.hero.previewCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-dn-border bg-dn-surface-soft p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dn-muted">
                      {card.label}
                    </p>

                    <p className="mt-2 text-lg font-semibold text-dn-text">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
