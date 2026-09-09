"use client";

import Image from "next/image";
import FolderIcon from "@/assets/icons/folder-fill.svg";
import EyeIcon from "@/assets/icons/eye-line-2.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MISSION_POINTS = [
  {
    title: "Our Mission",
    Icon: FolderIcon,
    iconClassName: "w-6 h-6 shrink-0",
    description:
      "Our mission is to create a trusted platform where businesses can hire exceptional talent with confidence and freelancers can access meaningful opportunities. We are committed to making hiring faster, collaboration simpler, and professional growth accessible to everyone through innovation, transparency, and trust.",
  },
  {
    title: "Our Vision",
    Icon: EyeIcon,
    iconClassName: "w-6 h-6 shrink-0",
    description:
      "Our vision is to become the world's most trusted freelancing platform, empowering businesses and professionals to connect without limits. We aim to build a future where talent is recognized by skills, opportunities are accessible globally, and success is shared by everyone.",
  },
];

function MissionCard({ title, Icon, iconClassName, description }) {
  return (
    <div className="flex flex-1 basis-0 min-w-0 flex-col gap-6 p-6 border border-[#EAE5FC] rounded-lg mb-16">
      <div className="w-12 h-12 flex justify-center items-center shrink-0 border border-[#EAE5FC] rounded-lg text-foreground">
        <Icon aria-hidden="true" className={iconClassName} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground text-[18px] font-bold leading-6">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-normal leading-5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function OurMission() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15">
      <section
        ref={elementRef}
        aria-labelledby="our-mission-heading"
        className={`relative flex flex-col w-full items-center overflow-hidden animate-on-scroll ${
          isVisible ? "animate-visible" : ""
        }`}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/overlay.webp"
            alt=""
            height={616}
            width={1440}
            className="min-w-full max-h-154 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center my-16 w-full max-w-188">
          <h2
            id="our-mission-heading"
            className="text-foreground text-[40px] font-semibold leading-13"
          >
            Our Mission & Our Vision
          </h2>
          <p className="font-normal text-muted-foreground text-[16px] leading-6">
            To empower global businesses and independent professionals to
            connect, collaborate, and succeed through a secure, innovative, and
            transparent platform.
          </p>
        </div>
        <div className="flex gap-6 w-full max-w-235.5">
          {MISSION_POINTS.map((point) => (
            <MissionCard key={point.title} {...point} />
          ))}
        </div>
      </section>
    </div>
  );
}
