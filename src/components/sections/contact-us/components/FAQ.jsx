"use client";

import { useState } from "react";
import CollapseUi from "@/components/ui/CollapseUi";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const VISIBLE_COUNT = 4;

const faqItems = [
  {
    key: "1",
    label: "How quickly will I receive a response?",
    children: "N/A",
  },
  {
    key: "2",
    label: "Can I get help with hiring freelancers?",
    children:
      "Yes. Our team can guide you through finding, evaluating, and hiring the right freelancers for your projects.",
  },
  {
    key: "3",
    label: "Do you provide technical support?",
    children: "N/A",
  },
  {
    key: "4",
    label: "Can freelancers contact ProDoo for assistance?",
    children: "N/A",
  },
];

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? faqItems : faqItems.slice(0, VISIBLE_COUNT);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16"
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-207">
        <h2
          id="faq-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Frequently Asked Questions
        </h2>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          Prodoo connects businesses with skilled freelancers, simplifying
          hiring and collaboration. It&apos;s a reliable platform for growth.
        </p>
      </div>

      <div className="flex flex-col w-full items-center max-w-207 mt-10">
        <CollapseUi
          items={visibleItems}
          defaultActiveKey={[]}
          className={"w-full max-w-198"}
        />
        {faqItems.length > VISIBLE_COUNT && (
          <span
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 mt-6 text-muted-foreground leading-4 font-semibold text-[16px] cursor-pointer"
          >
            {showAll ? "Show less" : "Read all FAQs"}
            <ArrowIcon
              className={`h-5 transition-transform! duration-300! ease-in-out! ${
                showAll ? "rotate-225" : "rotate-45"
              }`}
            />
          </span>
        )}
      </div>
    </section>
  );
}
