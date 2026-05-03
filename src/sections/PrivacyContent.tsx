"use client";

import { useI18n } from "@/providers/I18nProvider";

export default function PrivacyContent() {
  const { t } = useI18n();

  return (
    <section className="min-h-[calc(100svh-72px)] bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.16),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] py-24 text-dn-text">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-dn-pink">
          DiscereNow
        </p>

        <h1 className="mt-5 text-[2.6rem] font-black leading-[1.08] tracking-[-0.04em]">
          {t.privacy.title}
        </h1>

        <p className="mt-4 text-sm text-dn-muted">
          {t.privacy.updatedLabel}: {new Date().getFullYear()}
        </p>

        <p className="mt-8 text-lg leading-8 text-dn-muted">
          {t.privacy.intro}
        </p>

        <div className="mt-12 space-y-8">
          {t.privacy.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.5rem] border border-dn-border bg-white p-7 shadow-dn-soft"
            >
              <h2 className="text-xl font-black tracking-[-0.03em]">
                {section.title}
              </h2>

              <p className="mt-3 text-base leading-7 text-dn-muted">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
