import Image from "next/image";
import SearchBar from "@/shared/components/SearchBar";

export default function Hero() {
  return (
    <section
      aria-labelledby="browse-jobs-heading"
      className="relative flex flex-col w-full items-center overflow-hidden pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/overlay.webp"
          alt=""
          height={616}
          width={1440}
          priority
          className="min-w-full max-h-154 object-cover"
        />
      </div>
      <div className="relative flex justify-center items-center mt-16 w-29.75 h-10">
        <div className="h-10 flex w-full justify-center items-center border-t border-b border-[#FFFFFF] bg-[#FFFFFF40] font-medium text-sm text-foreground">
          <span className="flex flex-wrap items-center gap-1">
            <span className="text-primary font-bold">Browse Jobs</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center items-center justify-center w-full max-w-167 mt-2">
        <h1
          id="browse-jobs-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Find your next opportunity
        </h1>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          Browse freelance jobs that match your skills and start working with
          clients around the world.
        </p>
      </div>
      <div className="flex w-full max-w-209 justify-center mt-8">
        <SearchBar placeholder="Search jobs by title, skill, or keyword..." />
      </div>
    </section>
  );
}
