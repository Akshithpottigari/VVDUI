import React from "react";

type Props = {
  imageLink: string;
};

export default function avatar({ imageLink }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageLink})`,
      }}
      className="h-16 w-16 rounded-full border border-border-color bg-cover bg-center hover:border-primary duration-500"
    ></div>
  );
}
