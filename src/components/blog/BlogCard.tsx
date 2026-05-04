import Link from "next/link";
import type { BlogPost } from "@/data/blog/types";

type BlogCardProps = {
  post: BlogPost;
  href: string;
};

export default function BlogCard({ post, href }: BlogCardProps) {
  const date = new Intl.DateTimeFormat(
    post.locale === "pt-br" ? "pt-BR" : "en",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  ).format(new Date(post.publishAt));

  return (
    <article className="overflow-hidden rounded-[24px] border border-dn-border bg-white shadow-dn-soft transition hover:-translate-y-1 hover:shadow-dn">
      <Link href={href} className="block">
        <img
          src={post.heroImage}
          alt={post.heroImageAlt}
          className="h-52 w-full object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-black leading-tight text-dn-text">
            {post.title}
          </h2>

          <div className="mt-3 flex gap-4 text-sm font-bold text-dn-muted">
            <span>{date}</span>
            <span>6 min read</span>
          </div>

          <p className="mt-4 text-base leading-7 text-dn-muted">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-dn-border bg-dn-surface-soft px-3 py-1 text-xs font-bold text-dn-blue"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-5 font-black text-dn-purple">Open →</p>
        </div>
      </Link>
    </article>
  );
}
