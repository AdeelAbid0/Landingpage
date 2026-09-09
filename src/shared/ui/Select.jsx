import { Select as AntdSelect } from "antd";
import ArrowIcon from "@/assets/icons/arrow.svg";

export default function Select({
  label,
  placeholder,
  options = [],
  optionRender,
  value,
  onChange,
  className,
  ...rest
}) {
  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-foreground font-medium text-[14px] md:text-[16px] leading-6">
          {label}
        </p>
      )}
      <AntdSelect
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        optionRender={optionRender}
        suffixIcon={<ArrowIcon className="h-5 w-5" />}
        className={`w-full! ${className ?? ""}`}
        {...rest}
      />
    </div>
  );
}
