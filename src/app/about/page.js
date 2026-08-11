import AboutPage from "@/components/sections/about/AboutPage";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Prodoo, the freelancing platform connecting skilled freelancers with clients worldwide for remote work in writing, design, development, and more.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
