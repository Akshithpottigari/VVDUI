import React from "react";
import Select from "../components/select";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function SelectPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Select</div>
      <div className="text-sm">
        A select element presents a dropdown menu with a list of options,
        enabling users to choose a single value or item from the available
        options.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Select items={["Financial", "Marketing", "Human Resources"]} />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.select} language="js" />
    </div>
  );
}

export default SelectPage;
