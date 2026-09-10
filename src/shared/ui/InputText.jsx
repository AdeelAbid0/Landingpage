import { forwardRef } from "react";
import { Input } from "antd";

const InputText = forwardRef(
  (
    {
      placeholder,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      type = "text",
      suffix,
      label,
      name,
      formik,
      onChange,
      onBlur,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasError = formik?.touched?.[name] && formik?.errors?.[name];

    return (
      <div className="flex w-full items-center flex-col gap-2">
        {label && (
          <p className="flex w-full justify-start text-foreground font-medium text-[14px] md:text-[16px] leading-6">
            {label}
          </p>
        )}
        <Input
          ref={ref}
          type={type}
          name={name}
          value={formik?.values?.[name] || ""}
          onChange={onChange || formik?.handleChange}
          onBlur={onBlur || formik?.handleBlur}
          placeholder={placeholder}
          prefix={PrefixIcon ? PrefixIcon : null}
          suffix={SuffixIcon ? SuffixIcon : null}
          className={`w-full! rounded-full! md:h-12! border bg-white ${className ?? ""}`}
          style={{ height: "44px" }}
          status={hasError ? "error" : ""}
          {...rest}
          rootClassName="[&_.ant-input]:leading-0! [&_.ant-input-prefix]:!mr-2 [&_.ant-input]:placeholder:text-muted-foreground!"
        />
        {hasError && (
          <div className="flex w-full justify-start">
            <span className="text-danger text-sm">{formik.errors[name]}</span>
          </div>
        )}
      </div>
    );
  },
);

InputText.displayName = "InputText";

export default InputText;
