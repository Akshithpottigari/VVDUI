import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "outline"; // Define your variants here
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, text, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    let variantClass = "";
    switch (variant) {
      case "secondary":
        variantClass = "bg-secondary hover:bg-secondary/60";
        break;
      case "ghost":
        variantClass = "bg-gray-200 hover:bg-gray-200/60";
        break;
      case "outline":
        variantClass =
          "bg-transparent border-border-color border-2 hover:bg-gray-200/60";
        break;
      default:
        variantClass = "bg-primary hover:bg-primary/60";
    }
    return (
      <Comp
        {...props}
        ref={ref}
        className={`w-fit rounded-lg backdrop-blur-3xl cursor-pointer px-3 py-1.5 text-sm font-bold duration-500 ${variantClass}`}
      >
        {text}
      </Comp>
    );
  }
);
