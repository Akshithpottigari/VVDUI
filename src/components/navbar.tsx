import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  type: "fixed" | "scrollable";
  blur: boolean;
  children?: any;
  className?: string;
};

export default function Navbar({ type, blur, children, className }: Props) {
  let position = "";
  switch (type) {
    case "fixed":
      position = "fixed z-20";
      break;

    default:
      position = "";
      break;
  }
  return (
    <div
      className={twMerge(
        ` w-full
        ${position}
        ${
          blur
            ? "backdrop-blur-md bg-background-color/70"
            : "bg-background-color"
        }`,
        className
      )}
    >
      {children}
    </div>
  );
}
