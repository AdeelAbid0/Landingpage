import BrowseJobsPage from "@/shared/sections/browse-jobs/BrowseJobsPage";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Browse Jobs",
  description:
    "Browse freelance jobs on Prodoo and find remote work that matches your skills across design, development, writing, and more.",
  path: "/browse-jobs",
});

export default function Page() {
  return <BrowseJobsPage />;
}
