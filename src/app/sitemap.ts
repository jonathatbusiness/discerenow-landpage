import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://discerenow.vercel.app";

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

function isPublished(publishAt: string) {
  return new Date(publishAt).getTime() <= Date.now();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/pt-br/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts()
    .filter((post) => isPublished(post.publishAt))
    .map((post) => {
      const path =
        post.locale === "pt-br"
          ? `/pt-br/blog/${post.slug}`
          : `/blog/${post.slug}`;

      return {
        url: absoluteUrl(path),
        lastModified: new Date(post.updatedAt ?? post.publishAt),
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...blogRoutes];
}
