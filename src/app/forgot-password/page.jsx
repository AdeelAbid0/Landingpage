import { buildMetadata } from "@/lib/seo/site-config";
import ForgotPasswordPage from "@/shared/sections/auth/ForgotPasswordPage";

export const metadata = buildMetadata({
  title: "Forgot Password",
  description: "Reset your Prodoo account password.",
  path: "/forgot-password",
  noIndex: true,
});

export default function Page() {
  return <ForgotPasswordPage />;
}
