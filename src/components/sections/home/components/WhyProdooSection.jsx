"use client";

import { useState } from "react";
import ShieldIcon from "@/assets/icons/shield-tick.svg";
import BardIcon from "@/assets/icons/bard-fill.svg";
import GolbalSearchIcon from "@/assets/icons/global-search.svg";
import SecuritySafeIcon from "@/assets/icons/security-safe.svg";
import CancelIcon from "@/assets/icons/cancel.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const whyProdooFeatures = [
  {
    icon: ShieldIcon,
    title: "Verified Freelance Professionals",
    description:
      "Hire with absolute confidence. We rigorously vet every profile so you can build your remote team with trusted, top-tier talent.",
  },
  {
    icon: BardIcon,
    title: "AI Talent Matching",
    description:
      "Stop wasting time scrolling through endless resumes. Our smart algorithms instantly connect your specific projects with the exact skills you need.",
  },
  {
    icon: GolbalSearchIcon,
    title: "Global Talent Marketplace",
    description:
      "Access a world of expertise without boundaries. Seamlessly discover and hire exceptional independent professionals from across the globe",
  },
  {
    icon: SecuritySafeIcon,
    title: "Secure Collaboration Platform",
    description:
      "Manage your entire workflow in one safe space. Communicate directly, track progress, and complete projects seamlessly with zero hassle.",
  },
];

const traditionalHiringPoints = [
  { icon: CancelIcon, label: "Lengthy candidate screening" },
  { icon: CancelIcon, label: "Rigid hiring models" },
  { icon: CancelIcon, label: "Limited collaboration tools" },
  { icon: CancelIcon, label: "Traditional payment methods" },
  { icon: CancelIcon, label: "Slower business growth" },
  { icon: CancelIcon, label: "Hiring process can take weeks" },
  { icon: CancelIcon, label: "High recruitment and operational costs" },
  { icon: CancelIcon, label: "Time-consuming paperwork and manual processes" },
  { icon: CancelIcon, label: "Restricted to local candidates" },
];

const prodooHiringPoints = [
  { icon: BardIcon, label: "AI-powered talent matching for faster hiring" },
  {
    icon: BardIcon,
    label: "Flexible hiring for short-term and long-term projects",
  },
  {
    icon: BardIcon,
    label: "Built-in communication, file sharing, and milestone tracking",
  },
  { icon: BardIcon, label: "Secure and transparent online payments" },
  {
    icon: BardIcon,
    label: "Faster project delivery and scalable business growth",
  },
  { icon: BardIcon, label: "Hire skilled freelancers in minutes" },
  { icon: BardIcon, label: "Affordable hiring with flexible budgets" },
  { icon: BardIcon, label: "Fully digital hiring and project management" },
  { icon: BardIcon, label: "Hire remote talent from anywhere in the world" },
];

const VISIBLE_POINTS_COUNT = 3;

function HiringPoint({ point, borderClass, iconClassName }) {
  return (
    <div
      className={`flex w-full items-center gap-3 border ${borderClass} p-3 rounded-2xl`}
    >
      <span
        className={`flex justify-center items-center w-10 h-10 shrink-0 rounded-[10px] border ${borderClass}`}
      >
        <point.icon className={iconClassName} />
      </span>
      <p className="text-foreground font-normal text-sm leading-5">
        {point.label}
      </p>
    </div>
  );
}

function HiringPointsList({ points, borderClass, iconClassName, expanded }) {
  const visiblePoints = points.slice(0, VISIBLE_POINTS_COUNT);
  const extraPoints = points.slice(VISIBLE_POINTS_COUNT);

  return (
    <div className="flex flex-col gap-3 mt-7">
      {visiblePoints.map((point) => (
        <HiringPoint
          key={point.label}
          point={point}
          borderClass={borderClass}
          iconClassName={iconClassName}
        />
      ))}

      {extraPoints.length > 0 && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`flex flex-col gap-3 pt-3 transition-opacity duration-500 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              {extraPoints.map((point) => (
                <HiringPoint
                  key={point.label}
                  point={point}
                  borderClass={borderClass}
                  iconClassName={iconClassName}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WhyProdooSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16">
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-188">
        <div className="flex items-center gap-4 text-foreground text-[40px] font-semibold leading-13">
          <h2>Why Choose Prodoo?</h2>
        </div>
        <p className="font-nornal text-muted-foreground text-[16px] leading-6">
          Powerful AI driven tools built to simplify remote hiring, streamline
          project management, and boost productivity for businesses and
          freelancers alike.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6  mt-16 max-w-249 pb-16">
        {whyProdooFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col gap-3 ${index >= 2 ? "mt-10" : ""}`}
          >
            <div className="flex gap-3 items-center">
              <span className="w-12 h-12 flex justify-center items-center bg-[#EAE5FC] rounded-lg">
                <feature.icon className="text-primary" />
              </span>
              <h3 className="text-foreground font-semibold text-[18px] leading-6">
                {feature.title}
              </h3>
            </div>
            <div className="p-5 bg-[#F9F9FA] rounded-3xl">
              <p className="text-muted-foreground text-[16px] font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16">
        <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-188">
          <div className="flex items-center gap-4 text-foreground text-[40px] font-semibold leading-13">
            <h3>Why Prodoo is Different</h3>
          </div>
          <p className="font-nornal text-muted-foreground text-[16px] leading-6">
            Prodoo connects businesses with skilled freelancers, simplifying
            hiring and collaboration. It&apos;s a reliable platform for
            growth.
          </p>
        </div>

        <div className="flex gap-25 w-full max-w-300 mt-16">
          <div className="flex w-full flex-col max-w-137.5">
            <span className="flex gap-3 items-center">
              <BardIcon className="text-foreground text-2xl font-semibold" />
              <h3 className="text-foreground text-2xl font-semibold">
                Traditional Hiring
              </h3>
            </span>
            <HiringPointsList
              points={traditionalHiringPoints}
              borderClass="border-[#EAE5FC]"
              expanded={expanded}
            />
          </div>
          <div className="flex w-full flex-col max-w-137.5">
            <span className="flex gap-3 items-center">
              <BardIcon className="text-primary text-2xl font-semibold" />
              <h3 className="text-primary text-2xl font-semibold">
                ProDoo Hiring
              </h3>
            </span>
            <HiringPointsList
              points={prodooHiringPoints}
              borderClass="border-primary/30"
              iconClassName="text-primary"
              expanded={expanded}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-2 px-5 h-10 border border-[#EAE5FC] rounded-[99px] mt-12 text-primary text-sm font-semibold leading-4 cursor-pointer"
        >
          {expanded ? "Collapse for less" : "Expand for more"}
          <ArrowIcon
            className={`w-5 h-4 shrink-0 transition-transform duration-300 ${
              expanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </section>
    </section>
  );
}
