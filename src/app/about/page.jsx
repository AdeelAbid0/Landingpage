import AboutPage from "@/shared/sections/about/AboutPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Prodoo, the freelancing platform connecting skilled freelancers with clients worldwide for remote work in writing, design, development, and more.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
