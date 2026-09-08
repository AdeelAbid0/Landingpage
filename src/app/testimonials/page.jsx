import TestimonialsPage from "@/shared/sections/testimonials/TestimonialsPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Testimonials",
  description:
    "Read what freelancers and clients say about their experience hiring and working on Prodoo.",
  path: "/testimonials",
});

export default function Page() {
  return <TestimonialsPage />;
}
