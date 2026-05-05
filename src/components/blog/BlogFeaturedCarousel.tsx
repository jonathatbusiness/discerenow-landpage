"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/data/blog/types";

type BlogFeaturedCarouselProps = {
  posts: BlogPost[];
  blogHref: string;
  readLabel: string;
  allArticlesLabel: string;
};

export default function BlogFeaturedCarousel({
  posts,
  blogHref,
  readLabel,
  allArticlesLabel,
}: BlogFeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  if (posts.length === 0) {
    return null;
  }

  const activePost = posts[activeIndex];
  const articleHref =
    activePost.locale === "pt-br"
      ? `/pt-br/blog/${activePost.slug}`
      : `/blog/${activePost.slug}`;

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * 36,
      scale: shouldReduceMotion ? 1 : 0.985,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * -36,
      scale: shouldReduceMotion ? 1 : 1.015,
    }),
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.04,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.02,
    },
  };

  function goPrevious() {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? posts.length - 1 : current - 1,
    );
  }

  function goNext() {
    setDirection(1);
    setActiveIndex((current) =>
      current === posts.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section className="bg-dn-bg px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 shadow-dn sm:min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activePost.code}-image`}
              src={activePost.heroImage}
              alt={activePost.heroImageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          <div className="relative z-10 flex min-h-[520px] items-center sm:min-h-[420px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activePost.code}-content`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[620px] px-12 pb-36 pt-10 sm:px-20 sm:py-10 lg:px-24"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-dn-cyan">
                  Latest
                </p>

                <h1 className="mt-3 text-[1.55rem] font-black leading-[1.08] sm:text-4xl">
                  {activePost.title}
                </h1>

                <p className="mt-4 text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
                  {activePost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={articleHref}
                    className="rounded-full bg-[var(--dn-gradient)] px-5 py-3 text-sm font-black text-white shadow-dn-soft"
                  >
                    {readLabel}
                  </Link>

                  <Link
                    href={blogHref}
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur"
                  >
                    {allArticlesLabel}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {posts.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrevious}
                className="absolute bottom-8 left-1/2 z-20 flex h-10 w-10 -translate-x-[calc(100%+2.50rem)] items-center justify-center rounded-full border border-pink-400/70 bg-pink-500/85 text-xl font-black text-white shadow-dn-soft backdrop-blur transition hover:bg-pink-400 sm:left-4 sm:top-1/2 sm:h-11 sm:w-11 sm:-translate-x-0 sm:-translate-y-1/2 sm:border-white/30 sm:bg-black/25 sm:hover:bg-white/15"
                aria-label="Previous article"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute bottom-8 left-1/2 z-20 flex h-10 w-10 translate-x-[2.50rem] items-center justify-center rounded-full border border-pink-400/70 bg-pink-500/85 text-xl font-black text-white shadow-dn-soft backdrop-blur transition hover:bg-pink-400 sm:left-auto sm:right-4 sm:top-1/2 sm:h-11 sm:w-11 sm:translate-x-0 sm:-translate-y-1/2 sm:border-white/30 sm:bg-black/25 sm:hover:bg-white/15"
                aria-label="Next article"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="mt-7">
          <h2 className="text-xl font-black">{allArticlesLabel}</h2>
          <p className="mt-2 max-w-3xl text-white/75">
            {activePost.locale === "pt-br"
              ? "Guias práticos sobre design instrucional, produção de e-learning, SCORM e fluxos de autoria."
              : "Practical guides about instructional design, e-learning production, SCORM, and authoring workflows."}
          </p>
        </div>
      </div>
    </section>
  );
}
