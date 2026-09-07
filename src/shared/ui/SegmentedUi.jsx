"use client";

import { useEffect, useRef } from "react";
import { Segmented } from "antd";

const SegmentedUi = ({ options, onChange, className, value, disabled }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const stripInvalidAria = () => {
      node
        .querySelectorAll(".ant-segmented-item-label[aria-selected]")
        .forEach((el) => el.removeAttribute("aria-selected"));
    };

    stripInvalidAria();

    const observer = new MutationObserver(stripInvalidAria);
    observer.observe(node, {
      attributes: true,
      attributeFilter: ["aria-selected"],
      subtree: true,
    });

    return () => observer.disconnect();
  }, [options, value]);

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      <Segmented
        className={`m-auto! h-10! items-center! rounded-[99px]! border! border-[#EAE5FC]! bg-transparent! p-0.5! [&_.ant-segmented-group]:h-full! [&_.ant-segmented-item]:flex-1! [&_.ant-segmented-item]:rounded-[99px]! [&_.ant-segmented-item-selected]:bg-[#F4F2FE]! [&_.ant-segmented-item-selected]:shadow-none! [&_.ant-segmented-item-selected_.ant-segmented-item-label]:text-primary! [&_.ant-segmented-thumb]:rounded-[99px]! [&_.ant-segmented-thumb]:bg-[#F4F2FE]! [&_.ant-segmented-thumb]:shadow-none! [&_.ant-segmented-item-label]:flex! [&_.ant-segmented-item-label]:h-full! [&_.ant-segmented-item-label]:cursor-pointer! [&_.ant-segmented-item-label]:items-center! [&_.ant-segmented-item-label]:justify-center! [&_.ant-segmented-item-label]:px-4! [&_.ant-segmented-item-label]:text-muted-foreground! [&_.ant-segmented-item-label]:text-xs! [&_.ant-segmented-item-label]:font-medium! [&_.ant-segmented-item-label]:leading-9.5! ${className || ""}`}
        disabled={disabled}
        value={value}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default SegmentedUi;
