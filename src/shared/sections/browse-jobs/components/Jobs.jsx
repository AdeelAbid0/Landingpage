"use client";

import ResumeCard from "@/shared/components/ResumeCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SKILLS = [
  "Graphic Design",
  "UI/UX Design",
  "Video Editing",
  "Animation",
  "Photography",
  "Illustration",
  "Web Design",
  "Content Creation",
];

const JOBS = [
  {
    key: "1",
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    key: "2",
    avatarSrc: "/images/avatar-industry-2.webp",
    avatarAlt: "Ava Aesthetics",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Ava Aesthetics",
    location: "Singapore, Singapore",
  },
  {
    key: "3",
    avatarSrc: "/images/avatar-industry-3.webp",
    avatarAlt: "Ethan Element",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Ethan Element",
    location: "Singapore, Singapore",
  },
  {
    key: "4",
    avatarSrc: "/images/avatar-industry-4.webp",
    avatarAlt: "Mia Module",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Mia Module",
    location: "Singapore, Singapore",
  },
  {
    key: "5",
    avatarSrc: "/images/avatar-industry-5.webp",
    avatarAlt: "Noah Nexus",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Noah Nexus",
    location: "Singapore, Singapore",
  },
];

export default function Jobs() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`flex flex-col w-full items-center mb-16 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex items-center w-full max-w-300 overflow-auto gap-1.5">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="border whitespace-nowrap border-[#EAE5FC] px-3.5 py-2 text-muted-foreground font-medium text-sm cursor-pointer rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full max-w-300 mt-6">
        {JOBS.map(({ key, ...job }) => (
          <ResumeCard key={key} {...job} skills={SKILLS} />
        ))}
      </div>
    </section>
  );
}
