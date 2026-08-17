import Image from "next/image";
import LampIcon from "@/assets/icons/lamp-charge.svg";
import ProfileIcon from "@/assets/icons/profile-tick.svg";
import SearchIcon from "@/assets/icons/search-normal.svg";

export default function HomePage() {
  return (
    <main className="relative flex flex-col w-full items-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/overlay.webp"
          alt=""
          height={616}
          width={1440}
          priority
          className="min-w-full object-cover"
        />
      </div>
      <div className="relative flex w-full h-full justify-center items-center">
        <div className="h-10 flex w-full justify-center items-center bg-[#FFFFFF40] border-b border-[#FFFFFF] gap-1 font-medium text-sm text-foreground">
          <LampIcon />
          <span className="flex flex-wrap items-center gap-1">
            <span className="text-primary font-bold">Big News:</span>
            <span>ProDoo charges zero commission, </span>
            <span className="text-primary font-bold">you keep 100%</span>
            <span>of what you earn.</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-214 mt-8 items-center text-[64px] font-bold text-center leading-20">
        <h1 className="flex flex-col items-center gap-5">
          <span className="flex items-center gap-5">
            <span className="text-primary">Discover</span> the world’s
          </span>
          <span className="flex w-full items-center gap-5">
            Top rated
            <Image
              src="/images/customer-images.webp"
              alt="ProDoo customer avatars"
              width={180}
              height={86}
            />
            <span className="text-primary">talent here</span>
          </span>
        </h1>
      </div>
      <div className="text-[16px] max-w-172 text-center text-muted-foreground mt-3">
        <p>
          Discover ProDoo to hire trusted freelancers, explore freelance jobs,
          connect with remote talent, and grow through a global freelancing
          platform.
        </p>
      </div>
      <div className="flex w-full justify-center gap-4 mt-11">
        <div className="max-w-88.75 max-h-22.75 flex gap-4 justify-between bg-[#F4F2FE] border border-[#EAE5FC] rounded-xl p-4">
          <div className="flex w-12 h-12 justify-center items-center rounded-[10px] bg-white shrink-0">
            <ProfileIcon />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h4 className="text-[16px] font-semibold text-foreground">
              Hire a Freelancer
            </h4>
            <p className="text-xs text-muted-foreground leading-5">
              Discover jobs that match your skills, experience, and long-term
              career goals.
            </p>
          </div>
        </div>
        <div className="max-w-88.75 max-h-22.75 flex gap-4 justify-between bg-[#F4F2FE] border border-[#EAE5FC] rounded-xl p-4">
          <div className="flex w-12 h-12 justify-center items-center rounded-[10px] bg-white shrink-0">
            <SearchIcon />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h4 className="text-[16px] font-semibold text-foreground">
              Search Jobs
            </h4>
            <p className="text-xs text-muted-foreground leading-5">
              Explore opportunities that match your skills, experience, and
              career goals.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-15">
        <Image
          src="/images/hero-image.webp"
          alt="Freelancers collaborating on ProDoo"
          width={1000}
          height={437}
          priority
        />
      </div>
    </main>
  );
}
