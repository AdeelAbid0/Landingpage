import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Sign Up",
  description: "Create a free Prodoo account to hire top freelancers or find remote freelance jobs.",
  path: "/signup",
  noIndex: true,
});

export default function Page() {
  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
}
