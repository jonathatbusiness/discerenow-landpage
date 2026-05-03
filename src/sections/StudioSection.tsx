"use client";

import { ArrowRight, Brush, FileArchive, Settings2 } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/providers/I18nProvider";

export default function StudioSection() {
  const { t } = useI18n();

  const icons = [Settings2, Brush, FileArchive];

  return (
    <section id="studio" className="bg-dn-bg py-24 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 shadow-dn backdrop-blur sm:rounded-[2rem] sm:p-5">
              <div className="rounded-[1.25rem] bg-white p-4 text-dn-text sm:rounded-[1.5rem] sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-dn-border pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dn-muted">
                      {t.studio.preview.eyebrow}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">
                      {t.studio.preview.title}
                    </h3>
                  </div>

                  <span className="rounded-full bg-dn-surface-soft px-3 py-1 text-xs font-semibold text-dn-muted">
                    {t.studio.preview.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {t.studio.preview.steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-2xl border border-dn-border bg-dn-surface-soft p-4 transition duration-300 hover:-translate-y-1 hover:border-dn-blue/30 hover:bg-white hover:shadow-dn-soft"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dn-bg text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dn-cyan">
              {t.studio.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              {t.studio.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
              {t.studio.description}
            </p>

            <div className="mt-8 grid gap-4">
              {t.studio.cards.map((card, index) => {
                const Icon = icons[index] ?? ArrowRight;

                return (
                  <article
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-dn-cyan/40 hover:bg-white/[0.14] hover:shadow-[0_22px_60px_rgba(14,165,233,0.16)] sm:rounded-3xl"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-dn-bg">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-semibold">{card.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
