import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/seo/site-config";
import Navbar from "@/shared/layout/Navbar";
import AntdProvider from "@/shared/providers/AntdProvider";
import GoogleAuthProvider from "@/shared/providers/GoogleAuthProvider";
import QueryProvider from "@/shared/providers/QueryProvider";
import "./globals.css";
import Footer from "@/shared/layout/Footer";

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
      <body className="h-screen overflow-hidden flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GoogleAuthProvider>
          <QueryProvider>
            <AntdProvider>
              <Navbar />
              <div className="flex-1 min-h-0 flex flex-col overflow-y-auto">
                <div className="flex-1 flex flex-col">{children}</div>
                <Footer />
              </div>
            </AntdProvider>
          </QueryProvider>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
