import { siteConfig } from "@/lib/seo/site-config";

export default function sitemap() {
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/prodoo-apps", changeFrequency: "monthly", priority: 0.8 },
    { path: "/industries", changeFrequency: "weekly", priority: 0.8 },
    { path: "/browse-jobs", changeFrequency: "daily", priority: 0.8 },
    { path: "/post-job", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
    { path: "/testimonials", changeFrequency: "monthly", priority: 0.6 },
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
