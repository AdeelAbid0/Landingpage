import Postjob from "@/shared/sections/post-job/Postjob";
import { buildMetadata } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Post a Job",
  description:
    "Post a freelance job on Prodoo and connect with skilled, verified professionals ready to work on your project.",
  path: "/post-job",
});

export default function Page() {
  return <Postjob />;
}
