"use client";

import { useState } from "react";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const DURATION_UNITS = ["week", "Month", "Year"];

export default function Step4({ setStep }) {
  const [durationUnit, setDurationUnit] = useState("week");

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-130">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            When &amp; Where They&apos;ll Work
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            Define the project&apos;s timeline
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <InputText
            label="Project Duration"
            placeholder="Enter project duration"
            className="w-full rounded-full! border-2! border-[#9A85FF]! focus:shadow-[0px_0px_0px_2.5px_#8E81F52B]!"
          />
          <div className="flex w-full gap-1.5">
            {DURATION_UNITS.map((unit) => {
              const isSelected = durationUnit === unit;
              return (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setDurationUnit(unit)}
                  className={`flex justify-center w-full text-sm font-normal py-2.5 border rounded-full cursor-pointer ${
                    isSelected
                      ? "text-foreground border-foreground!"
                      : "text-muted-foreground border-muted-foreground!"
                  }`}
                >
                  {unit}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button
            type={"primary"}
            label="Continue"
            onClick={() => setStep(5)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
