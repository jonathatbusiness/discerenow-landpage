import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogFeaturedCarousel from "@/components/blog/BlogFeaturedCarousel";
import { getBlogPosts } from "@/lib/blog";
import BlogLocalePrompt from "@/components/blog/BlogLocalePrompt";

export const metadata: Metadata = {
  title: "DiscereNow Blog | E-learning, SCORM and Instructional Design",
  description:
    "Articles about e-learning production, instructional design workflows, Word to SCORM, and structured course creation.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getBlogPosts("en");
  const featuredPosts = posts.slice(0, 5);

  return (
    <>
      <Header />

      <BlogLocalePrompt />

      <main className="bg-dn-surface-soft">
        <BlogFeaturedCarousel
          posts={featuredPosts}
          blogHref="/blog"
          readLabel="Read article"
          allArticlesLabel="All articles"
        />

        <section className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div className="space-y-5">
            {posts.map((post) => (
              <BlogCard
                key={post.code}
                post={post}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>

          <aside className="space-y-5">
            <div className="rounded-[22px] border border-dn-border bg-white p-5 shadow-dn-soft">
              <h2 className="text-lg font-black text-dn-text">Coming soon</h2>
              <p className="mt-3 leading-7 text-dn-muted">
                A curated collection of templates, checklists, and tools to
                speed up your e-learning production workflow.
              </p>
            </div>

            <div className="rounded-[22px] border border-dn-border bg-gradient-to-br from-white to-dn-surface-soft p-5 shadow-dn-soft">
              <h2 className="text-lg font-black text-dn-text">
                Try DiscereNow
              </h2>
              <p className="mt-3 leading-7 text-dn-muted">
                Turn structured Word content into digital learning experiences
                ready for SCORM or web export.
              </p>
              <Link
                href="/#download"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-dn-pink px-6 py-3 text-base font-black text-white shadow-[0_18px_45px_rgba(236,72,153,0.28)] ring-1 ring-white/20 transition hover:scale-[1.02] hover:bg-pink-500 hover:shadow-[0_22px_55px_rgba(236,72,153,0.34)]"
              >
                <span className="text-white">Download DiscereNow</span>
                <span className="text-lg leading-none text-white">→</span>
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
