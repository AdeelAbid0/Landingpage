import { Collapse } from "antd";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const CollapseUi = ({ onChange, items, defaultActiveKey, className }) => {
  return (
    <Collapse
      bordered={false}
      className={`bg-transparent!
       [&_.ant-collapse-item]:bg-transparent [&_.ant-collapse-item]:mb-2 [&_.ant-collapse-item]:rounded-xl! [&_.ant-collapse-item]:border! [&_.ant-collapse-item]:border-[#EAE5FC]!
       [&_.ant-collapse-content]:text-muted-foreground!
        [&_.ant-collapse-header,&_.ant-collapse-content-box]:px-5!
         [&_.ant-collapse-item-active_.ant-collapse-header]:font-medium! [&_.ant-collapse-item-active_.ant-collapse-header]:text-foreground!
    ${className ?? ""}`}
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      items={items}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <ArrowDown
          className={`transition-all! ${isActive ? "rotate-180" : ""}`}
        />
      )}
    />
  );
};

export default CollapseUi;
