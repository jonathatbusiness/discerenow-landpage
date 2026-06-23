"use client";

import { Download, Layers } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { useI18n } from "@/providers/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  const itemInitial = shouldReduceMotion ? false : { opacity: 0, y: 24 };
  const itemAnimate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden bg-dn-bg text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-dn-blue blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-dn-purple blur-3xl" />
        <div className="absolute bottom-[-20%] left-[35%] h-72 w-72 rounded-full bg-dn-pink blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div
          initial={itemInitial}
          animate={itemAnimate}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dn-blue/30 bg-dn-blue/10 px-4 py-2 text-sm font-semibold text-dn-blue shadow-[0_12px_32px_rgba(14,165,233,0.16)]">
            <Layers className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#download"
              className="inline-flex min-w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-dn-blue via-dn-purple to-dn-pink px-7 py-4 text-sm font-bold text-white shadow-dn transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(139,92,246,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
              aria-label={t.hero.primaryCta}
            >
              <Download className="h-4 w-4" />
              {t.hero.primaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-3 shadow-dn backdrop-blur sm:rounded-[2rem] sm:p-4">
            <div className="rounded-[1.25rem] bg-white p-4 text-dn-text sm:rounded-[1.5rem]">
              <div className="mb-4 flex items-center gap-2 border-b border-dn-border pb-4">
                <span className="h-3 w-3 rounded-full bg-dn-pink" />
                <span className="h-3 w-3 rounded-full bg-dn-orange" />
                <span className="h-3 w-3 rounded-full bg-dn-blue" />
              </div>

              <div className="space-y-4">
                {t.hero.previewCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    className="rounded-2xl border border-dn-border bg-dn-surface-soft p-4 transition duration-300 hover:-translate-y-1 hover:border-dn-blue/30 hover:bg-white hover:shadow-dn-soft"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dn-muted">
                      {card.label}
                    </p>

                    <p className="mt-2 text-lg font-semibold text-dn-text">
                      {card.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
