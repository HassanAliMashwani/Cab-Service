import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/enquire?*"],
      },
      {
        // Search engine indexers & search citation bots (AEO / GEO)
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "OAI-SearchBot",
          "PerplexityBot",
          "Claude-SearchBot",
          "ClaudeBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // LLM training bots (owner can disallow if opting out of AI model training)
        userAgent: ["GPTBot", "Google-Extended"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
