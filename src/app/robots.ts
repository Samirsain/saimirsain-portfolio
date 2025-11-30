import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_INFO.url || "https://www.samirsain.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
