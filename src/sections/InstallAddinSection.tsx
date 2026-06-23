"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/providers/I18nProvider";

export default function InstallAddinSection() {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(0);

  const steps = t.install.steps;

  const goToPrevious = () => {
    setActiveStep((current) =>
      current === 0 ? steps.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveStep((current) =>
      current === steps.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="install"
      className="relative overflow-hidden bg-dn-bg py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl lg:max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-cyan">
              {t.install.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.04em] sm:text-[2.6rem]">
              {t.install.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
              {t.install.description}
            </p>
          </div>
        </Reveal>

        {/* Mobile */}
        <div className="mt-10 space-y-5 lg:hidden">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                <div className="flex items-start gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-dn-blue to-dn-pink text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-base font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white p-2">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={1200}
                    height={760}
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden items-start gap-12 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`group flex w-full cursor-pointer items-start gap-4 rounded-2xl border p-4 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan ${
                      isActive
                        ? "border-dn-cyan/60 bg-white/10 shadow-[0_18px_50px_rgba(14,165,233,0.18)]"
                        : "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                    aria-label={`${t.install.stepLabel} ${index + 1}: ${step.title}`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black transition ${
                        isActive
                          ? "bg-gradient-to-r from-dn-blue to-dn-pink text-white"
                          : "bg-white/10 text-white/70 group-hover:text-white"
                      }`}
                    >
                      {index + 1}
                    </span>

                    <span>
                      <span className="block text-sm font-black text-white">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-white/64">
                        {step.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-4">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-white">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].imageAlt}
                  width={1200}
                  height={760}
                  className="aspect-[16/10] w-full object-cover"
                  priority={false}
                />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-dn-bg/80 to-transparent p-4">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-dn-bg/70 text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-dn-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
                    aria-label={t.install.previous}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex gap-2">
                    {steps.map((step, index) => (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => setActiveStep(index)}
                        className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan ${
                          activeStep === index
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/45 hover:bg-white/80"
                        }`}
                        aria-label={`${t.install.goToStep} ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-dn-bg/70 text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-dn-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
                    aria-label={t.install.next}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
