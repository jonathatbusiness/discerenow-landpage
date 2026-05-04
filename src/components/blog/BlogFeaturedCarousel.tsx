"use client";

import { useState } from "react";
import Link from "next/link";
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

  if (posts.length === 0) {
    return null;
  }

  const activePost = posts[activeIndex];
  const articleHref =
    activePost.locale === "pt-br"
      ? `/pt-br/blog/${activePost.slug}`
      : `/blog/${activePost.slug}`;

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? posts.length - 1 : current - 1,
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === posts.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section className="bg-dn-bg px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 shadow-dn sm:min-h-[420px]">
          <img
            src={activePost.heroImage}
            alt={activePost.heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          <div className="relative z-10 flex min-h-[520px] items-center sm:min-h-[420px]">
            <div className="max-w-2xl px-6 py-10 sm:px-12">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-dn-cyan">
                Latest
              </p>

              <h1 className="mt-3 text-[2rem] font-black leading-[1.08] sm:text-4xl">
                {activePost.title}
              </h1>

              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
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
            </div>
          </div>

          {posts.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl font-black text-white backdrop-blur transition hover:bg-white/15"
                aria-label="Previous article"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl font-black text-white backdrop-blur transition hover:bg-white/15"
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
