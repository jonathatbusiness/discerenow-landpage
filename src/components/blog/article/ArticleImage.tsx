"use client";

import { useEffect, useId, useState } from "react";

type ArticleImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className="my-8">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group block w-full cursor-zoom-in overflow-hidden rounded-[22px] border border-dn-border bg-white shadow-dn-soft"
          aria-label={`Open image preview: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full object-cover transition duration-300 group-hover:scale-[1.015]"
            loading="lazy"
          />
        </button>

        {caption ? (
          <figcaption className="mt-3 text-center text-sm font-bold leading-6 text-dn-muted">
            {caption}
          </figcaption>
        ) : null}
      </figure>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="sr-only">
              Image preview
            </h2>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-dn-text shadow-dn-soft transition hover:bg-white"
            >
              Close
            </button>

            <img
              src={src}
              alt={alt}
              className="max-h-[86vh] w-full rounded-[24px] object-contain shadow-dn"
            />

            {caption ? (
              <p className="mt-4 text-center text-sm font-bold text-white">
                {caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
