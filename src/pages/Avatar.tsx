import React from "react";
import Avatar from "../components/avatar";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function AvatarPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Avatar</div>
      <div className="text-sm">
        An avatar is a small, representational image or icon that visually
        identifies a user or entity.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Avatar imageLink="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg" />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.avatar} language="js" />
    </div>
  );
}

export default AvatarPage;
