"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { industries } from "@/data/industries";
import SegmentedUi from "@/shared/ui/SegmentedUi";
import ShareIcon from "@/assets/icons/share.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industryOptions = industries.map(({ id, name }) => ({
  label: name,
  value: id,
}));

const roleIconColors = [
  "#FB4B41",
  "#02B697",
  "#8E81F5",
  "#3AA2F5",
  "#30CB57",
  "#F0774C",
  "#36BEDE",
];

export default function IndustriesSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-8 md:py-16 px-5 md:px-0 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex flex-col gap-4 items-start md:text-center md:items-center justify-center w-full max-w-188">
        <h2 className="text-foreground text-2xl md:text-[40px] font-semibold leading-9 md:leading-13">
          Not sure where to begin
        </h2>
        <p className="font-normal text-muted-foreground text-xs md:text-[16px] leading-4.5 md:leading-6">
          Discover the leading categories of talent highlighted below,
          showcasing a diverse range of skills and expertise that can elevate
          your projects.
        </p>
      </div>

      <div className="flex w-full justify-center flex-col gap-6 mt-6 md:mt-16">
        <SegmentedUi
          options={industryOptions}
          value={activeIndustry.id}
          className="industries-segmented w-full! max-w-223! h-auto! p-1! md:w-auto! md:max-w-none! md:h-10! md:p-0.5! [&_.ant-segmented-group]:h-auto! [&_.ant-segmented-group]:flex-col! [&_.ant-segmented-group]:items-stretch! [&_.ant-segmented-group]:gap-1! md:[&_.ant-segmented-group]:h-full! md:[&_.ant-segmented-group]:flex-row! md:[&_.ant-segmented-group]:items-center! md:[&_.ant-segmented-group]:gap-0!  md:[&_.ant-segmented-item]:min-h-0! [&_.ant-segmented-item-label]:justify-start! md:[&_.ant-segmented-item-label]:justify-center! md:[&_.ant-segmented-item-label]:px-4! [&_.ant-segmented-item]:rounded-md! md:[&_.ant-segmented-item]:rounded-[99px]! "
          onChange={(id) =>
            setActiveIndex(
              industries.findIndex((industry) => industry.id === id),
            )
          }
        />

        <div className="flex w-full flex-col items-center">
          <div className="relative flex w-full overflow-hidden md:py-4 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max shrink-0 items-center gap-3 animate-marquee">
              {[...activeIndustry.roles, ...activeIndustry.roles].map(
                (role, index) => (
                  <span
                    key={`${activeIndustry.id}-${role}-${index}`}
                    className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg border border-[#EAE5FC] bg-white py-0.5 pr-4 pl-0.5 text-sm font-medium text-foreground"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F4F2FE]">
                      <ShareIcon
                        className="m-auto h-4 w-4 [&_path]:stroke-(--icon-color)!"
                        style={{
                          "--icon-color":
                            roleIconColors[index % roleIconColors.length],
                        }}
                      />
                    </div>
                    {role}
                  </span>
                ),
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              router.push("/industries");
            }}
            className="hidden md:flex mt-6 cursor-pointer h-8.25 w-18.75 shrink-0 items-center justify-center rounded-full border border-[#EAE5FC] bg-[#F4F2FE] text-xs font-medium text-primary"
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
