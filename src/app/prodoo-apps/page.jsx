import ProdooAppsPage from "@/shared/sections/prodoo-apps/ProdooAppsPage";

export const metadata = {
  title: "Prodoo Apps",
  description:
    "Explore the suite of tools Prodoo offers freelancers and clients to manage remote work, from job matching to project tracking.",
  alternates: {
    canonical: "/prodoo-apps",
  },
};

export default function Page() {
  return <ProdooAppsPage />;
}
