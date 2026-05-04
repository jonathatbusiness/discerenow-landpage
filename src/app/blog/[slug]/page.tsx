import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogPosts()
    .filter((post) => post.locale === "en")
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug("en", slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt ?? post.publishAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug("en", slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <BlogArticleLayout
        post={post}
        relatedPosts={getRelatedBlogPosts("en", slug)}
        blogHref="/blog"
        blogLabel="Blog"
        moreArticlesLabel="More articles"
        ctaTitle="Try DiscereNow"
        ctaText="Turn structured learning content into digital course experiences with a faster production workflow."
        ctaHref="/#download"
        ctaButton="Download DiscereNow"
      />

      <Footer />
    </>
  );
}
