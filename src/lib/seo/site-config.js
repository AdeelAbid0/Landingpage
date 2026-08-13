// Single source of truth for site-wide SEO values (brand name, base URL,
// default description/keywords, social links). Pages, the root layout,
// robots.js and sitemap.js all read from here so metadata stays consistent
// across the site instead of being duplicated per file.
//
// Ported from the existing React SPA's index.html / structured data
// (see Prodoo_reactjs/index.html) so the two properties stay in sync.

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://prodoo.com"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Prodoo",
  url: siteUrl,
  titleTemplate: "%s | Prodoo",
  defaultTitle:
    "Prodoo: Global Freelance Hub — Connect with Top Remote Opportunities Worldwide",
  description:
    "Hire top freelance professionals worldwide or find remote freelance jobs. Prodoo connects skilled freelancers with clients for writing, design, development, marketing, and virtual assistance work.",
  keywords: [
    "Freelancing platform Pakistan",
    "Freelancing jobs Pakistan",
    "Hire freelancers",
    "Freelance jobs",
    "Remote work platform",
    "AI job matching",
    "Freelancer hiring platform",
    "Virtual hiring assistant",
    "Freelance work automation",
    "Time tracking for freelancers",
  ],
  locale: "en_US",
  twitterHandle: "@prodoo",
  sameAs: [
    "https://www.facebook.com/Prodoofacebook",
    "https://www.instagram.com/prodoo_insta/",
    "https://www.linkedin.com/company/prodoofreelancer",
  ],
};
