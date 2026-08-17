import ContactUsPage from "@/components/sections/contact-us/ContactUsPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Prodoo team for support, partnership, or general inquiries about hiring freelancers or finding freelance work.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function Page() {
  return <ContactUsPage />;
}
