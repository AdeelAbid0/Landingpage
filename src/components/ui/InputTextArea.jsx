import TextArea from "antd/es/input/TextArea";

const InputTextArea = ({
  placeholder,
  label,
  rows,
  className,
  name,
  formik,
  onChange,
  onBlur,
  ...rest
}) => {
  const hasError = formik?.touched?.[name] && formik?.errors?.[name];

  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-foreground font-semibold text-[16px] leading-6">
          {label}
        </p>
      )}

      <TextArea
        placeholder={placeholder}
        name={name}
        value={formik?.values?.[name] || ""}
        onChange={onChange || formik?.handleChange}
        onBlur={onBlur || formik?.handleBlur}
        className={`w-full! rounded-lg border bg-[#F4F2FE]! ${className ?? ""}`}
        status={hasError ? "error" : ""}
        {...rest}
        rows={rows}
      />
      {hasError && (
        <div className="flex w-full justify-start">
          <span className="text-danger text-sm">{formik.errors[name]}</span>
        </div>
      )}
    </div>
  );
};

export default InputTextArea;
