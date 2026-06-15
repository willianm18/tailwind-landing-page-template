import { MetadataRoute } from "next";

const SITE_URL = "https://landing-page.willianramthun.store";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
