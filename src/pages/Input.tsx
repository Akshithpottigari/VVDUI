import React from "react";
import { Input } from "../components/input";
import Code from "../components/code";
import { COMPONENTS } from "../constants";

type Props = {};

function InputPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Input</div>
      <div className="text-sm">An input allows users to enter or submit. </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Input variant="primary" placeholder="Username" />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.input} language="js" />
    </div>
  );
}

export default InputPage;
