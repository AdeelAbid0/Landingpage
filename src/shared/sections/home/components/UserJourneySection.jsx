"use client";

import { useState } from "react";
import BardIcon from "@/assets/icons/bard-fill.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VISIBLE_COUNT = 3;

const FEATURE_GROUPS = [
  {
    key: "business",
    heading: "For Businesses",
    description:
      "Connect with skilled freelancers who have the expertise to bring your ideas to life. Find the right talent, streamline hiring, and complete projects efficiently with confidence.",
    accentColor: "text-company",
    introBorder: "border-[#D9F7F2]",
    cardBorder: "border-[#D9F7F2]",
    iconBg: "bg-[#E6FAF6]",
    features: [
      {
        title: "Create Your Business Profile",
        description:
          "Register your business and create a profile that showcases your company and hiring needs. A complete profile attracts skilled freelancers.",
      },
      {
        title: "Publish Your Project",
        description:
          "Share project details, budget, timeline, and skills needed. Whether one expert or a full team, qualified professionals are ready to help.",
      },
      {
        title: "Discover the Best Talent",
        description:
          "Use AI Talent Matching to find freelancers that fit your project. Review portfolios, experience, and skills before deciding.",
      },
      {
        title: "Hire with Confidence",
        description:
          "Choose the freelancer that fits your goals and start right away. Prodoo simplifies Remote Hiring with verified profiles and clear communication.",
      },
      {
        title: "Collaborate and Track Progress",
        description:
          "Manage conversations, share files, and stay updated on your Freelance Project in one secure workspace.",
      },
      {
        title: "Complete Projects and Pay Securely",
        description:
          "Approve work and release payments safely through Prodoo's Secure Marketplace, ensuring trust for businesses and freelancers.",
      },
    ],
  },
  {
    key: "freelancers",
    heading: "For Freelancers",
    description:
      "Showcase your skills, connect with clients from around the world, and work on projects that match your expertise. Build your reputation, grow your freelance career, and unlock new job opportunities with confidence.",
    accentColor: "text-primary",
    introBorder: "border-[#EAE5FC]",
    cardBorder: "border-[#EAE5FC]",
    iconBg: "bg-[#F4F2FE]",
    features: [
      {
        title: "Create Your Professional Profile",
        description:
          "Create a profile that highlights your skills, experience, certifications, and achievements to stand out.",
      },
      {
        title: "Explore New Opportunities",
        description:
          "Explore freelance, virtual, and remote jobs for all expertise levels.",
      },
      {
        title: "Send Personalized Proposals",
        description:
          "Apply for projects with tailored proposals that show your understanding of the client's needs and how you can deliver results.",
      },
      {
        title: "Connect with Clients",
        description:
          "Communicate with businesses, discuss requirements, finalize expectations, and build trust.",
      },
      {
        title: "Deliver Quality Work",
        description:
          "Complete projects on time and exceed client expectations. Delivering excellent work earns positive reviews and future opportunities.",
      },
      {
        title: "Get Paid and Grow Your Career",
        description:
          "Secure payments build your reputation. Prodoo helps you succeed in online earning and freelance business.",
      },
    ],
  },
];

function FeatureCard({ title, description, iconBg, cardBorder, accentColor }) {
  return (
    <div
      className={`flex flex-col w-full max-w-149 gap-2 p-6 border ${cardBorder} rounded-xl`}
    >
      <span
        className={`w-12 h-12 flex justify-center items-center ${iconBg} rounded-lg`}
      >
        <BardIcon className={accentColor} />
      </span>
      <h3 className="text-[18px] font-semibold text-foreground leading-6 mt-4">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm font-normal leading-5">
        {description}
      </p>
    </div>
  );
}

function FeatureGroup({ group }) {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = group.features.slice(0, VISIBLE_COUNT);
  const extraFeatures = group.features.slice(VISIBLE_COUNT);

  return (
    <>
      <div
        className={`flex flex-col text-center justify-center items-center w-full max-w-149 mt-8 md:mt-16 gap-2 p-6 border ${group.introBorder} rounded-xl`}
      >
        <h2 className={`text-[20px] font-semibold ${group.accentColor}`}>
          {group.heading}
        </h2>
        <p className="text-muted-foreground text-xs font-normal leading-5">
          {group.description}
        </p>
      </div>

      <div className="flex w-full justify-between max-w-300 gap-6">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
            {visibleFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                iconBg={group.iconBg}
                cardBorder={group.cardBorder}
                accentColor={group.accentColor}
              />
            ))}
          </div>

          {extraFeatures.length > 0 && (
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 transition-opacity duration-500 ${
                    expanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {extraFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.title}
                      {...feature}
                      iconBg={group.iconBg}
                      cardBorder={group.cardBorder}
                      accentColor={group.accentColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {extraFeatures.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className={`flex items-center gap-2 px-5 h-10 border ${group.introBorder} rounded-[99px] mt-12 ${group.accentColor} text-sm font-semibold leading-4 cursor-pointer`}
        >
          {expanded ? "Collapse for less" : "Expand for more"}
          <ArrowIcon
            className={`w-5 h-4  shrink-0 transition-transform duration-300 ${
              expanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      )}
    </>
  );
}

export default function UserJourneySection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-8 md:py-16 px-5 md:px-0 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex flex-col gap-4 md:text-center md:items-center items-start justify-center w-full max-w-188">
        <div className="flex items-center gap-4 text-foreground text-2xl md:text-[40px] font-semibold leading-9 md:leading-13">
          <h2>Smarter Hiring and Freelancing</h2>
        </div>
        <p className="font-normal text-muted-foreground text-xs md:text-[16px] leading-4.5 md:leading-6">
          Prodoo connects businesses and professionals via a secure platform to
          find and hire verified freelancers. Explore global freelance jobs,
          virtual roles, and flexible work-from-home opportunities.
        </p>
      </div>

      {FEATURE_GROUPS.map((group) => (
        <FeatureGroup key={group.key} group={group} />
      ))}
    </section>
  );
}
