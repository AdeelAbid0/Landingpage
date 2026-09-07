"use client";

import { Collapse } from "antd";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const CollapseUi = ({ onChange, items, defaultActiveKey, className }) => {
  return (
    <Collapse
      bordered={false}
      className={`bg-transparent!
       [&_.ant-collapse-item]:bg-transparent [&_.ant-collapse-item]:mb-3 [&_.ant-collapse-item]:rounded-xl! [&_.ant-collapse-item]:border! [&_.ant-collapse-item]:border-[#EAE5FC]! [&_.ant-collapse-item]:overflow-hidden!
        [&_.ant-collapse-content]:transition-all! [&_.ant-collapse-content]:duration-300! [&_.ant-collapse-content]:ease-in-out!
        [&_.ant-collapse-header]:px-6! [&_.ant-collapse-header]:py-2! [&_.ant-collapse-header]:transition-colors! [&_.ant-collapse-header]:duration-300!
         [&_.ant-collapse-header]:text-foreground! [&_.ant-collapse-header]:text-[18px]! [&_.ant-collapse-header]:font-medium! [&_.ant-collapse-header]:leading-8! [&_.ant-collapse-header]:items-center!
         [&_.ant-collapse-item-active_.ant-collapse-header]:text-primary!
         [&_.ant-collapse-content-box]:px-6! [&_.ant-collapse-content-box]:py-2!
         [&_.ant-collapse-content-box]:text-muted-foreground! [&_.ant-collapse-content-box]:font-normal! [&_.ant-collapse-content-box]:text-sm! [&_.ant-collapse-content-box]:leading-5!
         [&_.ant-collapse-panel]:px-6! [&_.ant-collapse-panel]:py-2! [&_.ant-collapse-panel]:text-muted-foreground!
         [&_.ant-collapse-panel-active]:px-6! [&_.ant-collapse-panel-active]:py-2! [&_.ant-collapse-panel-active]:text-muted-foreground!
         [&_.ant-collapse-body]:p-0!
    ${className ?? ""}`}
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      items={items}
      expandIconPlacement="end"
      expandIcon={({ isActive }) => (
        <ArrowDown
          className={`transition-transform! duration-300! ease-in-out! ${
            isActive ? "rotate-180" : ""
          }`}
        />
      )}
    />
  );
};

export default CollapseUi;
