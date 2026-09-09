"use client";

import { useState } from "react";
import { Slider as AntdSlider } from "antd";

export default function Slider({
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step,
  range,
  onChange,
  formatLabel = (val) => val,
  className = "",
  ...rest
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;

  const handleChange = (next) => {
    setInternalValue(next);
    onChange?.(next);
  };

  const values = Array.isArray(currentValue) ? currentValue : [currentValue];

  return (
    <div className={`relative w-full pt-9 ${className}`}>
      {values.map((val, index) => {
        const percent = ((val - min) / (max - min)) * 100;
        return (
          <span
            key={index}
            className="absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-xs font-normal leading-normal text-foreground shadow-[0px_4px_16px_0px_#00000026]"
            style={{ left: `${percent}%` }}
          >
            {formatLabel(val)}
          </span>
        );
      })}
      <AntdSlider
        value={currentValue}
        min={min}
        max={max}
        step={step}
        range={range}
        onChange={handleChange}
        tooltip={{ open: false }}
        classNames={{
          rail: "h-1.5! rounded-full! bg-[#EEECFE]!",
          track: "h-1.5! rounded-full! bg-primary!",
          handle:
            "w-5! h-5! after:w-5! after:h-5! after:bg-primary! after:shadow-none!",
        }}
        styles={{
          root: { marginInline: 0 },
          handle: { top: "50%", transform: "translateX(-50%) translateY(-50%)" },
        }}
        {...rest}
      />
    </div>
  );
}
