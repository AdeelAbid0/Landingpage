import BlogsPage from "@/shared/sections/blogs/BlogsPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Blogs",
  description:
    "Explore Prodoo's latest insights, freelancing tips, and success stories for businesses hiring talent and freelancers growing their careers.",
  path: "/blogs",
});

export default function Page() {
  return <BlogsPage />;
}
