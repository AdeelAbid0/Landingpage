import SearchBar from "@/shared/components/SearchBar";

export const metadata = {
  title: "Browse Jobs",
  description:
    "Browse freelance jobs on Prodoo and find remote work that matches your skills across design, development, writing, and more.",
  alternates: {
    canonical: "/browse-jobs",
  },
};

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-full overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-purple-400 via-purple-300 to-blue-300 opacity-40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-br from-purple-800 to-purple-500 opacity-40 blur-[100px] rounded-full pointer-events-none" />
      <div className="" />
      <div className="flex flex-col gap-6 w-full max-w-[836px]">
        <h2 className="text-[32px] font-semibold leading-100% text-center">
          Browse jobs
        </h2>
        <SearchBar />
      </div>
    </div>
  );
}
