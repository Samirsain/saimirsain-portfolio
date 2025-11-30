import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostsByCategory } from "@/features/blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_INFO.url || "https://samirsain.com";

  // Blog posts URLs
  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt || Date.now()).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Components category URLs
  const components = getPostsByCategory("components").map((post) => ({
    url: `${baseUrl}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt || Date.now()).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Static routes
  const routes = ["", "/blog", "/components", "/about", "/projects", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.9,
    })
  );

  return [...routes, ...posts, ...components];
}
