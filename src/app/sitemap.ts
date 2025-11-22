import type { MetadataRoute } from "next";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://estudio747.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicos", "/quemsomos", "/contactos"].map(
    (route): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
    }),
  );

  return routes;
}
