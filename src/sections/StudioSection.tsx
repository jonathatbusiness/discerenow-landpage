"use client";

import { ArrowRight, Brush, FileArchive, Settings2 } from "lucide-react";

import { useI18n } from "@/providers/I18nProvider";

export default function StudioSection() {
  const { t } = useI18n();

  const icons = [Settings2, Brush, FileArchive];

  return (
    <section id="studio" className="bg-dn-bg py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-dn backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-dn-text">
              <div className="mb-5 flex items-center justify-between border-b border-dn-border pb-4">
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
                    className="flex items-center gap-3 rounded-2xl border border-dn-border bg-dn-surface-soft p-4"
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dn-cyan">
              {t.studio.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              {t.studio.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              {t.studio.description}
            </p>

            <div className="mt-8 grid gap-4">
              {t.studio.cards.map((card, index) => {
                const Icon = icons[index] ?? ArrowRight;

                return (
                  <article
                    key={card.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
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
          </div>
        </div>
      </div>
    </section>
  );
}
