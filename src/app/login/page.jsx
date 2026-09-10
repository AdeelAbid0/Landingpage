import { buildMetadata } from "@/lib/seo/site-config";
import LoginPage from "@/shared/sections/auth/LoginPage";

export const metadata = buildMetadata({
  title: "Log In",
  description:
    "Log in to your Prodoo account to hire freelancers or find remote freelance work.",
  path: "/login",
  noIndex: true,
});

export default function Page() {
  return <LoginPage />;
}
