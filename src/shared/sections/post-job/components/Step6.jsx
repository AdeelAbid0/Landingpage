"use client";

import { useState } from "react";
import Button from "@/shared/ui/Button";
import TickIcon from "@/assets/icons/tick.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

export default function Step6({ setStep }) {
  const [durationUnit, setDurationUnit] = useState("week");

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-130">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            Review Before You Go Live
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            Review your job post as iPros will see it. Edit or publish when
            ready.
          </p>
        </div>

        <div className="flex flex-col gap-6 border border-[#DCD8FC] rounded-2xl p-8">
          <h2 className="font-semibold text-foreground text-2xl">
            “Full stack developer”
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <TickIcon className="flex w-6! h-6! shrink-0" />
              <span className="flex-1 text-foreground text-[13px] font-normal">
                Looking for a web developer who excels at crafting intuitive and
                engaging digital experiences. Your role will involve conducting
                thorough research, designing wireframes, and building
                prototypes. You will work closely with developers and
                stakeholders to boost usability, elevate user satisfaction.
              </span>
              <span
                onClick={() => setStep(2)}
                className="shrink-0 text-[13px] text-primary cursor-pointer"
              >
                Edit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TickIcon className="flex w-6! h-6! shrink-0" />
              <div className="flex flex-1 flex-wrap gap-1.5">
                <span className="border whitespace-nowrap border-[#EAE5FC] px-2 py-1.5 text-foreground font-medium text-[10px] cursor-pointer rounded-md">
                  Full-time
                </span>
                <span className="border whitespace-nowrap border-[#EAE5FC] px-2 py-1.5 text-foreground font-medium text-[10px] cursor-pointer rounded-md">
                  Remote
                </span>
              </div>
              <span
                onClick={() => setStep(4)}
                className="shrink-0 text-[13px] text-primary cursor-pointer"
              >
                Edit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TickIcon className="flex w-6! h-6! shrink-0" />
              <span className="flex-1 text-foreground text-[13px] font-normal">
                1 week
              </span>
              <span
                onClick={() => setStep(4)}
                className="shrink-0 text-[13px] text-primary cursor-pointer"
              >
                Edit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TickIcon className="flex w-6! h-6! shrink-0" />
              <span className="flex-1 text-foreground text-[13px] font-normal">
                $20/hour
              </span>
              <span
                onClick={() => setStep(5)}
                className="shrink-0 text-[13px] text-primary cursor-pointer"
              >
                Edit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TickIcon className="flex w-6! h-6! shrink-0" />
              <span className="flex-1 text-foreground text-[13px] font-normal">
                Information Technology
              </span>
              <span
                onClick={() => setStep(3)}
                className="shrink-0 text-[13px] text-primary cursor-pointer"
              >
                Edit
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mb-20">
          <Button
            type={"primary"}
            label="Continue"
            onClick={() => setStep(7)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
