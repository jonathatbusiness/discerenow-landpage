import { allPosts } from "@/data/blog/generated-posts";
import type { BlogLocale, BlogPost } from "@/data/blog/types";

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  const now = new Date();

  return allPosts
    .filter((post) => post.locale === locale)
    .filter((post) => new Date(post.publishAt) <= now)
    .sort(
      (a, b) =>
        new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime(),
    );
}

export function getBlogPostBySlug(
  locale: BlogLocale,
  slug: string,
): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return allPosts;
}

export function getRelatedBlogPosts(
  locale: BlogLocale,
  currentSlug: string,
  limit = 3,
): BlogPost[] {
  const currentPost = getBlogPostBySlug(locale, currentSlug);

  if (!currentPost) {
    return [];
  }

  return getBlogPosts(locale)
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag),
      ).length;

      return {
        post,
        score: sharedTags,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        new Date(b.post.publishAt).getTime() -
        new Date(a.post.publishAt).getTime()
      );
    })
    .slice(0, limit)
    .map((item) => item.post);
}
