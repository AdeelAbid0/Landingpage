import { siteConfig } from "@/lib/seo/site-config";

// Add a new entry here whenever a new marketing page is added under src/app.
export default function sitemap() {
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact-us", changeFrequency: "monthly", priority: 0.6 },
  ];

  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
