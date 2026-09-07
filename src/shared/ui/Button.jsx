import { Button as AntdButton } from "antd";

const Button = ({
  type,
  htmlType,
  size,
  label,
  onClick,
  disabled,
  isLoading,
  prefixIcon,
  suffixIcon,
  className,
  width = "auto",
}) => {
  const getWidthClass = () => {
    if (width === "full") return "w-full";
    if (width === "auto") return "w-auto";
    if (width === "fit") return "w-fit";
    return "w-auto";
  };

  return (
    <AntdButton
      type={type}
      htmlType={htmlType}
      size={size}
      onClick={onClick}
      disabled={disabled}
      loading={isLoading}
      className={`${getWidthClass()} shadow-none! ${
        type === "default"
          ? "text-primary! border border-border! bg-muted! hover:bg-background/80! hover:text-primary!"
          : type === "danger"
            ? "text-danger! font-medium! bg-[#FEE2E2]! border border-[#FCA5A5]! hover:bg-[#FEE2E2]/80! hover:text-danger!"
            : type === "link"
              ? "flex px-0! py-0! h-auto! underline cursor-pointer font-medium underline-offset-3"
              : type === "text"
                ? "text-primary! bg-transparent! border-none! shadow-none! hover:bg-transparent! hover:text-primary/80!"
                : type === "success"
                  ? "text-success! font-medium! bg-[#D1FAE5]! border border-success! hover:bg-[#D1FAE5]/80! hover:text-success!"
                  : type === "outline"
                    ? "text-primary! border border-primary! bg-white!"
                    : ""
      } ${className}`}
    >
      {prefixIcon && <span className="ml-0">{prefixIcon}</span>} {label}
      {suffixIcon && <span className="ml-0">{suffixIcon}</span>}
    </AntdButton>
  );
};

export default Button;
