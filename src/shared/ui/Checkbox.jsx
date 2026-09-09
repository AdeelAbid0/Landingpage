import { forwardRef } from "react";
import { Checkbox as AntdCheckbox } from "antd";

const Checkbox = forwardRef(
  ({ label, checked, onChange, disabled, name, className, ...rest }, ref) => {
    return (
      <AntdCheckbox
        ref={ref}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`items-center! gap-2! [&_.ant-checkbox-label]:px-0! [&_.ant-checkbox-label]:text-foreground [&_.ant-checkbox-label]:text-[14px] [&_.ant-checkbox-label]:font-normal ${className ?? ""}`}
        {...rest}
      >
        {label}
      </AntdCheckbox>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
