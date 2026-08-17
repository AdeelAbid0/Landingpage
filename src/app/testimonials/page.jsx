import TestimonialsPage from "@/components/sections/testimonials/TestimonialsPage";

export const metadata = {
  title: "Testimonials",
  description:
    "Read what freelancers and clients say about their experience hiring and working on Prodoo.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
