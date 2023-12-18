import React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  asChild?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "textarea";
    return (
      <Comp
        className="flex min-h-[80px] w-full rounded-md border border-border-color bg-background-color px-3 py-2 text-sm ring-offset-background placeholder:text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ref={ref}
        {...props}
      />
    );
  }
);
