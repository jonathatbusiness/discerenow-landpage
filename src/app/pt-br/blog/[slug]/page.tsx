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
    .filter((post) => post.locale === "pt-br")
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug("pt-br", slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/pt-br/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/pt-br/blog/${post.slug}`,
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

export default async function BlogArticlePagePtBr({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug("pt-br", slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <BlogArticleLayout
        post={post}
        relatedPosts={getRelatedBlogPosts("pt-br", slug)}
        blogHref="/pt-br/blog"
        blogLabel="Blog"
        moreArticlesLabel="Mais artigos"
        ctaTitle="Conheça o DiscereNow"
        ctaText="Transforme conteúdos estruturados em experiências digitais de aprendizagem com um fluxo de produção mais rápido."
        ctaHref="/#download"
        ctaButton="Baixar DiscereNow"
      />

      <Footer />
    </>
  );
}
