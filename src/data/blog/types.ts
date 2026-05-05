import type { ReactNode } from "react";

export type BlogLocale = "en" | "pt-br";

export type BlogPost = {
  code: string;
  slug: string;
  locale: BlogLocale;
  title: string;
  description: string;
  excerpt: string;
  publishAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  heroImage: string;
  heroImageAlt: string;
  content?: ReactNode;
  contentHtml?: string;
};
