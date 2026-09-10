"use client";

import Image from "next/image";
import LampIcon from "@/assets/icons/lamp-charge.svg";
import CheckmarkIcon from "@/assets/icons/checkmark.svg";
import { useRouter } from "next/navigation";
import SearchBar from "@/shared/components/SearchBar";

const ARROW_ICON_PATH =
  "M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z";

const BARD_ICON_PATH =
  "M10.6144 17.7956L11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916 0.821766 9.19319 0.821768 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C0.868537 9.26368 0.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899L19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z";

function MaskIcon({ path, className = "", style }) {
  const maskImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='${path}' fill='black'/%3E%3C/svg%3E")`;
  return (
    <span
      className={`mask-center mask-no-repeat mask-contain inline-block shrink-0 ${className}`}
      style={{ WebkitMaskImage: maskImage, maskImage, ...style }}
    />
  );
}

const ROLE_CARDS = [
  {
    key: "recruiters",
    illustrationSrc: "/images/Illustration-1.png",
    gradient: "linear-gradient(108.88deg, #02C1A1 2.1%, #015B4C 98.19%)",
    borderColor: "#B1EFE4",
    badgeColor: "#017965",
    corner:
      "rounded-t-[20px] md:rounded-tr-none md:rounded-tl-[20px] md:rounded-bl-[20px]",
    label: "For Recruiters",
    steps: [
      "Post Jobs in Seconds with AI",
      "Review Top Matched Talent",
      "Hire & Manage Contracts",
    ],
  },
  {
    key: "freelancers",
    illustrationSrc: "/images/Illustration-2.png",
    gradient: "linear-gradient(109deg, #7B70D4 1.62%, #403A6E 97.64%)",
    borderColor: "#DCD8FC",
    badgeColor: "#403A6E",
    corner:
      "rounded-b-[20px] md:rounded-bl-none md:rounded-tr-[20px] md:rounded-br-[20px]",
    mirrored: true,
    label: "For Freelancers",
    steps: [
      "Browse Global Opportunities",
      "Apply in One Click",
      "Get Hired & Start Earning",
    ],
  },
];

function StepsList({ steps }) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-4">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#F1F1F1]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <CheckmarkIcon />
            </span>
            {index < steps.length - 1 && (
              <div className="absolute top-full left-1/2 mt-1 h-4 -translate-x-1/2 border-l-2 border-dashed border-[#E9E9E9]" />
            )}
          </div>
          <p className="text-[16px] font-medium leading-7 text-white">{step}</p>
        </div>
      ))}
    </div>
  );
}

function RoleCard({
  illustrationSrc,
  gradient,
  borderColor,
  badgeColor,
  corner,
  mirrored = false,
  label,
  steps,
}) {
  return (
    <div className="relative w-full">
      <div
        className={`absolute z-0 h-9.5 border ${mirrored ? "top-58 left-29 right-0 md:top-58 md:left-0 md:right-20.25" : "-top-6 left-0 right-28 md:top-58 md:left-20.25 md:right-0"} ${corner}`}
        style={{ background: gradient, borderColor }}
      />
      <div
        className={`absolute z-10 h-9.5 border ${mirrored ? "top-55 left-17 right-0 md:top-55 md:left-0 md:right-9.5" : "-top-3 left-0 right-17.5 md:top-55 md:left-9.5 md:right-0"} ${corner}`}
        style={{ background: gradient, borderColor }}
      />
      <div
        className={`relative z-20 flex h-61.5 w-full flex-col overflow-hidden border p-6 ${corner}`}
        style={{ background: gradient, borderColor }}
      >
        <Image
          src={illustrationSrc}
          alt=""
          width={311}
          height={214}
          className="absolute top-7 left-25"
        />
        <span
          className="flex self-start rounded-full border px-2.5 py-2 text-xs font-medium text-white"
          style={{ backgroundColor: badgeColor, borderColor }}
        >
          {label}
        </span>
        <StepsList steps={steps} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const router = useRouter();
  const handleSearch = () => {
    router.push("/post-job");
  };
  return (
    <section className="relative flex flex-col w-full items-center overflow-hidden px-5 md:px-0">
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
      <div className="relative flex w-full h-full justify-center items-center">
        <div className="h-10 flex w-full justify-center items-center bg-[#FFFFFF40] border-b border-[#FFFFFF] gap-1 font-medium text-[10px] md:text-sm text-foreground">
          <LampIcon className="hidden md:flex" />
          <span className="flex flex-wrap items-center gap-1">
            <span className="hidden md:flex text-primary font-bold">
              Big News:
            </span>
            <span>ProDoo charges zero commission, </span>
            <span className="text-primary font-bold">you keep 100%</span>
            <span>of what you earn.</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full md:max-w-214 mt-7 md:mt-8 md:items-center text-[33px] md:text-[64px] font-bold text-center leading-10.5 md:leading-16">
        <h1 className="flex flex-col items-start md:items-center gap-1 md:gap-5">
          <span className="flex items-center gap-2 md:gap-5">
            <span className="text-primary">Discover</span> the world’s
          </span>
          <span className="flex w-full items-center gap-2 md:gap-5">
            Top rated
            <Image
              src="/images/customer-images.webp"
              alt="ProDoo customer avatars"
              className="hidden md:flex"
              width={180}
              height={86}
              priority
            />
            <span className="text-primary">talent here</span>
          </span>
          <Image
            src="/images/customer-images.webp"
            alt="ProDoo customer avatars"
            className="md:hidden flex"
            width={180}
            height={86}
            priority
          />
        </h1>
      </div>
      <div className="text-xs md:text-[16px] max-w-172 leading-4.5 md:leading-100% md:text-center text-foreground mt-4 md:mt-3 md:mb-6">
        <p>
          Discover ProDoo to hire trusted freelancers, explore freelance jobs,
          connect with remote talent, and grow through a global freelancing
          platform.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            height={583}
            width={1440}
            className="min-w-full object-cover"
          />
        </div>
        <div className="relative flex flex-col w-full max-w-209 justify-center gap-6 mt-8 mb-6">
          <SearchBar
            onSearch={handleSearch}
            className="w-full h-61.5! md:h-auto! rounded-2xl! md:rounded-full!"
          />
          <div className="flex w-full justify-end">
            {/* <div className="flex items-center gap-3">
              <div className="text-foreground text-xs! font-medium! border border-[#DCD8FC] px-2.5 py-2 rounded-full">
                <p>User experience designer</p>
              </div>
              <div className="text-foreground text-xs! font-medium! border border-[#DCD8FC] px-2.5 py-2 rounded-full">
                <p>React Developer</p>
              </div>
              <div className="text-foreground text-xs! font-medium! border border-[#DCD8FC] px-2.5 py-2 rounded-full">
                <p>Full stack devloper</p>
              </div>
            </div> */}
            <span
              className="flex h-11! w-full md:w-76 cursor-pointer items-center rounded-full bg-[linear-gradient(90deg,#D22CFF_0%,#5659FE_100%)] p-0.5"
              onClick={() => router.push("/browse-jobs")}
            >
              <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-white px-5">
                <span className="bg-[linear-gradient(90deg,#D22CFF_0%,#5659FE_100%)] bg-clip-text text-transparent w-max">
                  Browse Jobs, I’m a Freelancer
                </span>
                <MaskIcon
                  path={ARROW_ICON_PATH}
                  className="h-5 w-5 rotate-90 bg-[linear-gradient(90deg,#D22CFF_0%,#5659FE_100%)]"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="mt-10 flex w-full max-w-188 flex-col items-start justify-center text-left md:items-center md:text-center">
          <div className="flex gap-2 items-start md:items-center">
            <MaskIcon
              path={BARD_ICON_PATH}
              className="h-6 w-6"
              style={{
                background: "linear-gradient(180deg, #D32DFF 0%, #5559FD 100%)",
              }}
            />
            <h2 className="text-foreground text-2xl font-semibold">
              How it works
            </h2>
          </div>
          <div className="flex flex-col md:flex-row w-full max-w-208 gap-0 mt-8 mb-12">
            {ROLE_CARDS.map(({ key, ...card }) => (
              <RoleCard key={key} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
