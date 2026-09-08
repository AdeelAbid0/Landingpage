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
  ogImage: "/images/hero-image.webp",
  twitterHandle: "@prodoo",
  sameAs: [
    "https://www.facebook.com/Prodoofacebook",
    "https://www.instagram.com/prodoo_insta/",
    "https://www.linkedin.com/company/prodoofreelancer",
  ],
};

/**
 * Builds a page's metadata object, including per-page Open Graph and
 * Twitter tags so each route shows its own title/description when shared
 * on social platforms instead of falling back to the root layout's.
 */
export function buildMetadata({ title, description, path, images }) {
  const ogImages = images || [siteConfig.ogImage];

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title,
      description,
      images: ogImages,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      title,
      description,
      images: ogImages,
    },
  };
}
