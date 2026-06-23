"use client";

import { Layers, Repeat2, Zap } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/providers/I18nProvider";

export default function AboutSection() {
  const { t } = useI18n();

  const icons = [Layers, Repeat2, Zap];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-24 text-dn-text sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-pink">
            {t.about.eyebrow}
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.04em] text-dn-text sm:text-[2.6rem]">
            {t.about.title}
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-dn-muted sm:text-lg">
            {t.about.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 lg:gap-6">
          {t.about.cards.map((card, index) => {
            const Icon = icons[index] ?? Layers;

            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="h-full rounded-[1.5rem] border border-dn-border bg-white p-6 shadow-dn-soft transition duration-300 hover:-translate-y-1.5 hover:border-dn-blue/30 hover:shadow-dn sm:rounded-[1.75rem] sm:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-dn-pink text-white shadow-[0_18px_45px_rgba(236,72,153,0.22)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.03em] text-dn-text">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-dn-muted">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
