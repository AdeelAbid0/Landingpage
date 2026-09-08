import BrowseJobsPage from "@/shared/sections/browse-jobs/BrowseJobsPage";

export const metadata = {
  title: "Browse Jobs",
  description:
    "Browse freelance jobs on Prodoo and find remote work that matches your skills across design, development, writing, and more.",
  alternates: {
    canonical: "/browse-jobs",
  },
};

export default function Page() {
  return <BrowseJobsPage />;
}
