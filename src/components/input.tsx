import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost"; // Define your variants here
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "input";
    let variantClass = "";
    switch (variant) {
      case "secondary":
        variantClass = "border-secondary border";
        break;
      case "ghost":
        variantClass = "border-border-color border";
        break;
      default:
        variantClass = "border-primary border";
    }
    return (
      <Comp
        {...props}
        ref={ref}
        className={`w-fit text-text-color placeholder-placeholder rounded-md backdrop-blur-3xl px-3 py-1.5 text-sm font-semibold duration-500 ${variantClass}`}
      ></Comp>
    );
  }
);
