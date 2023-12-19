import React from "react";
import Checkbox from "../components/checkbox";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function CheckboxPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Checkbox</div>
      <div className="text-sm">
        A checkbox allows users to make binary choices, such as selecting or
        deselecting an option.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <div className="">
          <Checkbox text="Complete project proposal" />
          <Checkbox text="Review documentation" />
          <Checkbox text="Attend team meeting" />
        </div>
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.checkbox} language="js" />
    </div>
  );
}

export default CheckboxPage;
