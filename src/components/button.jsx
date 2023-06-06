import cn from "classnames";

export const Button = ({ children = null, variant = "primary", ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "flex w-max items-center px-[18px] py-[10px] text-sm font-medium duration-200",
        {
          "rounded-[100px] bg-brand-primary-default text-white hover:brightness-110":
            variant === "primary",
          "rounded-[100px] bg-[#F2F2F2] text-[#333]": variant === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
};
