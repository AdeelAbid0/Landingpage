"use client";

import { useState } from "react";
import Button from "@/shared/ui/Button";
import Select from "@/shared/ui/Select";
import Slider from "@/shared/ui/Slider";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const ENGAGEMENT_TYPES = ["Hourly", "Fixed price"];

const CURRENCY_OPTIONS = [
  { value: "USD", label: "USD ($)", symbol: "$" },
  { value: "EUR", label: "EUR (€)", symbol: "€" },
  { value: "GBP", label: "GBP (£)", symbol: "£" },
  { value: "PKR", label: "PKR (₨)", symbol: "₨" },
  { value: "INR", label: "INR (₹)", symbol: "₹" },
];

export default function Step5({ setStep }) {
  const [engagementType, setEngagementType] = useState("Hourly");
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(50);

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-130">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            Set Engagement & Budget
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            Choose your work method (hourly or fixed) and set the rate for
            candidates.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Select
            label="Currency"
            placeholder="Select currency"
            value={currency}
            onChange={setCurrency}
            options={CURRENCY_OPTIONS}
            optionRender={(option) => (
              <div className="flex w-full items-center justify-between">
                <span>{option.data.value}</span>
                <span>{option.data.symbol}</span>
              </div>
            )}
          />
          <div className="flex w-full gap-1.5">
            {ENGAGEMENT_TYPES.map((type) => {
              const isSelected = engagementType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEngagementType(type)}
                  className={`flex justify-center w-full text-sm font-normal py-2.5 border rounded-full cursor-pointer ${
                    isSelected
                      ? "text-foreground border-foreground!"
                      : "text-muted-foreground border-muted-foreground!"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <Slider
            value={rate}
            onChange={setRate}
            min={0}
            max={100}
            formatLabel={(val) =>
              `${val}${CURRENCY_OPTIONS.find((option) => option.value === currency)?.symbol ?? ""}${
                engagementType === "Hourly" ? " /hour" : ""
              }`
            }
          />
        </div>
        <div className="flex w-full justify-center mb-20">
          <Button
            type={"primary"}
            label="Continue"
            onClick={() => setStep(6)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
