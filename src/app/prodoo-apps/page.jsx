import ProdooAppsPage from "@/shared/sections/prodoo-apps/ProdooAppsPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Prodoo Apps",
  description:
    "Explore the suite of tools Prodoo offers freelancers and clients to manage remote work, from job matching to project tracking.",
  path: "/prodoo-apps",
});

export default function Page() {
  return <ProdooAppsPage />;
}
