import cn from "classnames";

export const Button = ({
  children = null,
  variant = "primary",
  shadow = false,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "flex w-max items-center gap-3 rounded-[100px] px-[18px] py-[10px] text-sm font-medium duration-200",
        {
          "bg-brand-primary-default text-white hover:brightness-110":
            variant === "primary",
          "bg-[#F2F2F2] text-brand-gray-dark hover:brightness-90":
            variant === "secondary",
          "shadow-[0px_8px_32px_rgba(102,107,226,0.35)]": shadow,
        }
      )}
    >
      {children}
    </button>
  );
};
