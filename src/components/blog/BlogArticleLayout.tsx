import Link from "next/link";
import type { BlogPost } from "@/data/blog/types";

type BlogArticleLayoutProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
  blogHref: string;
  blogLabel: string;
  moreArticlesLabel: string;
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaButton: string;
};

export default function BlogArticleLayout({
  post,
  relatedPosts,
  blogHref,
  blogLabel,
  moreArticlesLabel,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaButton,
}: BlogArticleLayoutProps) {
  const date = new Intl.DateTimeFormat(
    post.locale === "pt-br" ? "pt-BR" : "en",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  ).format(new Date(post.publishAt));

  return (
    <main className="bg-dn-surface-soft">
      <article className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <img
          src={post.heroImage}
          alt={post.heroImageAlt}
          className="h-[260px] w-full rounded-[28px] object-cover shadow-dn sm:h-[420px]"
        />

        <div className="mt-8">
          <div className="text-sm font-black text-dn-muted">
            <Link href={blogHref} className="text-dn-purple">
              {blogLabel}
            </Link>
            <span className="mx-2 text-dn-border">/</span>
            <span>{post.title}</span>
          </div>

          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-dn-text sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-dn-muted">
            <span>{date}</span>
            <span>·</span>
            <span>by {post.author}</span>
            <span>·</span>
            <span>6 min read</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-dn-border bg-white px-3 py-1 text-sm font-black text-dn-purple"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-none border border-dn-border bg-white px-6 py-8 shadow-dn-soft sm:px-10">
            <div className="dn-blog-content">
              {post.content ? (
                post.content
              ) : post.contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              ) : null}
            </div>

            <div className="mt-12 border-t border-dn-border pt-6">
              <p className="font-black italic text-dn-text">
                Continue reading:{" "}
                {relatedPosts.slice(0, 2).map((relatedPost, index) => (
                  <span key={relatedPost.code}>
                    <Link
                      href={
                        relatedPost.locale === "pt-br"
                          ? `/pt-br/blog/${relatedPost.slug}`
                          : `/blog/${relatedPost.slug}`
                      }
                      className="text-dn-purple"
                    >
                      {relatedPost.title}
                    </Link>
                    {index === 0 && relatedPosts.length > 1 ? " — " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[22px] border border-dn-border bg-white p-5 shadow-dn-soft">
              <h2 className="text-lg font-black text-dn-text">
                {moreArticlesLabel}
              </h2>

              <div className="mt-4 space-y-3">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Link
                    key={relatedPost.code}
                    href={
                      relatedPost.locale === "pt-br"
                        ? `/pt-br/blog/${relatedPost.slug}`
                        : `/blog/${relatedPost.slug}`
                    }
                    className="block rounded-[16px] border border-dn-border bg-dn-surface-soft p-4 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <h3 className="font-black leading-snug text-dn-text">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-dn-muted">
                      {new Intl.DateTimeFormat(
                        post.locale === "pt-br" ? "pt-BR" : "en",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      ).format(new Date(relatedPost.publishAt))}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-dn-border bg-white p-5 shadow-dn-soft">
              <h2 className="text-lg font-black text-dn-text">{ctaTitle}</h2>
              <p className="mt-3 leading-7 text-dn-muted">{ctaText}</p>
              <Link
                href={ctaHref}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-dn-pink px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(236,72,153,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:shadow-[0_22px_55px_rgba(236,72,153,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dn-cyan"
              >
                <span className="text-white">{ctaButton}</span>
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
