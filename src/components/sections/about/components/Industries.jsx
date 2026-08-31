"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const INDUSTRIES = [
  {
    src: "/images/avatar-industry-1.webp",
    label: "Data Science, AI & Analytics",
  },
  {
    src: "/images/avatar-industry-2.webp",
    label: "Software & Web Development",
  },
  { src: "/images/avatar-industry-3.webp", label: "Cybersecurity" },
  { src: "/images/avatar-industry-4.webp", label: "Cloud Computing & DevOps" },
  { src: "/images/avatar-industry-5.webp", label: "Cloud Computing & DevOps" },
  {
    src: "/images/avatar-industry-6.webp",
    label: "Robotics & Industrial Automation",
  },
  { src: "/images/avatar-industry-7.webp", label: "CleanTech & GreenTech" },
  {
    src: "/images/avatar-industry-8.webp",
    label: "HealthTech & Digital Health",
  },
];

function IndustryCard({ src, label }) {
  return (
    <div className="group flex flex-col gap-6 items-center justify-center text-center p-5 rounded-lg cursor-pointer hover:bg-[#F4F2FE] transition-colors duration-300">
      <Image src={src} alt="" width={64} height={64} aria-hidden="true" />
      <p className="text-foreground group-hover:text-primary font-semibold text-[16px] leading-[140%] whitespace-nowrap transition-colors">
        {label}
      </p>
    </div>
  );
}

export default function Industries() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15">
      <section
        ref={elementRef}
        aria-labelledby="industries-heading"
        className={`relative flex flex-col w-full items-center overflow-hidden mb-16 animate-on-scroll ${
          isVisible ? "animate-visible" : ""
        }`}
      >
        <div className="flex flex-col gap-2 text-center items-center justify-center my-16 w-full max-w-188">
          <h2
            id="industries-heading"
            className="text-foreground text-[40px] font-semibold leading-13"
          >
            Industries We Support
          </h2>
          <p className="font-normal text-muted-foreground text-[16px] leading-6">
            Prodoo supports businesses across a wide range of industries by
            connecting them with skilled freelancers who bring specialized
            expertise to every project. From startups to global enterprises, we
            help organizations find the right talent to achieve their goals with
            confidence.
          </p>
        </div>
        <ul className="flex flex-wrap gap-6 w-full max-w-300 list-none">
          {INDUSTRIES.map((industry, index) => (
            <li key={index} className="flex-none w-[calc(25%-18px)]">
              <IndustryCard {...industry} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
