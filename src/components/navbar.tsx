import React from "react";

type Props = {
  type: "fixed" | "scrollable";
  blur: boolean;
  children?: any;
};

export default function Navbar({ type, blur, children }: Props) {
  let position = "";
  switch (type) {
    case "fixed":
      position = "fixed z-20";
      break;

    default:
      position = "";
      break;
  }
  if (blur)
    return (
      <div
        className={`bg-background-color w-full
        ${position}
        ${blur && "backdrop-blur-md bg-background-color/70"} `}
      >
        {children}
      </div>
    );
}
