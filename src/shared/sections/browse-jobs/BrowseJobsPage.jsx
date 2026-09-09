import SearchBar from "@/shared/components/SearchBar";
import JobPostCard from "@/shared/components/JobPostCard";
import EmptyStateImg from "@/assets/images/empty-state-img.svg";

const filters = [
  {
    label: "Job Type",
    options: ["Full Time", "Part Time", "Contract", "Internship"],
  },
  {
    label: "Experience",
    options: ["Entry Level", "1-2 Years", "3-5 Years", "5+ Years"],
  },

  {
    label: "Salary",
    options: ["Under $500", "$500+", "$1000+", "$2000+"],
  },
  {
    label: "Location",
    options: ["Remote", "On-site", "Hybrid"],
  },
];

const jobs = [
  {
    title: "Full Stack Developer",
    postedAt: "10min ago",
    location: "USA",
    description:
      "We're looking for an experienced React developer to join our product team and help build modern, scalable web applications. You'll partner closely with design and product to ship polished UI work.",
    hourlyRate: "$80-120/hr",
    skills: [
      "Flutter",
      "WebDevelopment",
      "FullStack",
      "ECommerce",
      "JavaScript",
      "React",
      "+ 12",
    ],
  },
  {
    title: "Data Scientist",
    postedAt: "10min ago",
    location: "Lahore, Pakistan",
    description:
      "We're looking for an experienced React developer to join our product team and help build modern, scalable web applications. You'll partner closely with design and product to ship polished UI work.",
    hourlyRate: "$80-120/hr",
    skills: [
      "Python",
      "DataAnalysis",
      "MachineLearning",
      "AI",
      "R",
      "SQL",
      "+ 8",
    ],
  },
  {
    title: "Senior React Developer",
    postedAt: "10min ago",
    location: "USA",
    description:
      "We're looking for an experienced React developer to join our product team and help build modern, scalable web applications. You'll partner closely with design and product to ship polished UI work.",
    hourlyRate: "$80-120/hr",
    skills: [
      "Flutter",
      "WebDevelopment",
      "FullStack",
      "ECommerce",
      "JavaScript",
      "React",
      "+ 12",
    ],
  },
];

export default function BrowseJobsPage() {
  return (
    <main className="mx-auto flex w-full h-full max-w-6xl flex-col gap-4 overflow-hidden px-4 pb-8 pt-6 sm:px-6">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-2xl font-semibold leading-none">Browse jobs</h1>
        <SearchBar
          className="h-12! pr-1!"
          placeholder="Search your favorite job"
        />
      </div>

      {jobs.length === 0 ? (
        <section className="flex min-h-117.5 h-full w-full flex-col items-center justify-center text-center">
          <EmptyStateImg className="h-34 w-38" />
          <h2 className="mt-2 text-md font-semibold text-foreground">Oh no</h2>
          <p className="mt-2 max-w-80 text-sm leading-4 text-muted-foreground">
            No jobs matched your search. Please try using different keywords.
          </p>
        </section>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 pt-2" aria-label="Job filters">
            {filters.map((filter) => (
              <select
                defaultValue=""
                key={filter.label}
                className="h-8 w-max rounded-md border border-[#EAE5FC] bg-[#F8F7FF] px-2.5 text-[12px] font-medium text-foreground outline-none hover:bg-[#F4F2FE] cursor-pointer"
              >
                <option value="">{filter.label}</option>

                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>

          <section className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2 leading-100%">
              <h2 className="text-lg font-semibold">
                Search results ({jobs.length * 5})
              </h2>
              <p className="text-sm text-muted-foreground">
                Developer, Front-End-Developer-Backend developer
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {jobs.map((job) => (
                <JobPostCard key={job.title} {...job} />
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
