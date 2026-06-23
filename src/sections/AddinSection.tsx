"use client";

import {
  CheckCircle2,
  FileText,
  MousePointerClick,
  Puzzle,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/providers/I18nProvider";

export default function AddinSection() {
  const { t } = useI18n();

  const icons = [FileText, Puzzle, MousePointerClick];

  return (
    <section
      id="addin"
      className="bg-transparent py-24 text-dn-text sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dn-blue">
              {t.addin.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              {t.addin.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-dn-muted sm:text-lg">
              {t.addin.description}
            </p>

            <ul className="mt-8 space-y-4">
              {t.addin.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-dn-text">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-dn-blue" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-5">
            {t.addin.cards.map((card, index) => {
              const Icon = icons[index] ?? Puzzle;

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="h-full rounded-[1.5rem] border border-dn-border bg-white p-6 shadow-dn-soft transition duration-300 hover:-translate-y-1.5 hover:border-dn-blue/30 hover:shadow-dn sm:rounded-3xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-dn-bg text-white shadow-dn-soft">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xl font-semibold">{card.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-dn-muted">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
