import ContactUsPage from "@/shared/sections/contact-us/ContactUsPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Prodoo team for support, partnership, or general inquiries about hiring freelancers or finding freelance work.",
  path: "/contact-us",
});

export default function Page() {
  return <ContactUsPage />;
}
