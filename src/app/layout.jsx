import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/seo/site-config";
import Navbar from "@/components/layout/Navbar";
import AntdProvider from "@/components/providers/AntdProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Site-wide structured data (JSON-LD) so search engines can attribute the
// site to Prodoo as an Organization (name, social profiles) and as a
// WebSite. Kept here (rather than per-page) since it describes the site
// as a whole, not any one page.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.ico`,
  sameAs: siteConfig.sameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <QueryProvider>
          <AntdProvider>
            <Navbar />
            {/* Pages supply their own <main>; this just grows to push the
                footer to the bottom of the viewport when content is short,
                and lets the page scroll normally (no clipping) otherwise. */}
            <div className="flex-1 flex flex-col">
              {children}
              <Footer />
            </div>
          </AntdProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
