import BlogsPage from "@/shared/sections/blogs/BlogsPage";

export const metadata = {
  title: "Blogs",
  description:
    "Explore Prodoo's latest insights, freelancing tips, and success stories for businesses hiring talent and freelancers growing their careers.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function Page() {
  return <BlogsPage />;
}
