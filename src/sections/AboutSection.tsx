"use client";

import { Layers, Repeat2, Zap } from "lucide-react";

import { useI18n } from "@/providers/I18nProvider";

export default function AboutSection() {
  const { t } = useI18n();

  const icons = [Layers, Repeat2, Zap];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.24),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.22),transparent_36%),linear-gradient(135deg,#e0f7ff_0%,#ffffff_45%,#ffeaf5_100%)] py-28 text-dn-text"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-pink">
            {t.about.eyebrow}
          </p>

          <h2 className="mt-5 max-w-4xl text-[2.6rem] font-black leading-[1.08] tracking-[-0.04em] text-dn-text">
            {t.about.title}
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-dn-muted">
            {t.about.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card, index) => {
            const Icon = icons[index] ?? Layers;

            return (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-dn-border bg-white p-8 shadow-dn-soft"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-dn-blue via-dn-purple to-dn-pink text-white shadow-dn-soft">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-dn-text">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-dn-muted">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
