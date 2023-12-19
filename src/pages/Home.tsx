import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="text-text-color max-w-6xl font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Introduction</div>
      <div className="">
        <span className="font-semibold">VVDUI (Vivid UI)</span> is a collection
        of components, written using React and Tailwind.
      </div>
      <div className="">
        <span className="font-semibold">VVDUI</span> embraces modern UI
        principles, subtle blurs, and sleek animations to provide a delightful
        user experience. Components are not only visually appealing but they are
        user-friendly too. With a commitment to reusability, developers can
        effortlessly integrate and modify these components to meet the specific
        requirements of their projects.
      </div>
      <div className="">
        Best of all, these components are free to use in your projects. While
        not mandatory, mentioning <span className="font-semibold">VVDUI </span> in
        your project would be greatly appreciated.
      </div>
      <div className="">
        This project is inspired by{" "}
        <a
          className="underline font-semibold"
          href="https://neobrutalism-components.vercel.app/"
        >
          Neobrutalism components
        </a>
      </div>
    </div>
  );
}
