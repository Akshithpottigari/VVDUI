import React from "react";
import { COMPONENTS } from "../constants";
import Code from "../components/code";
import Dropdown from "../components/dropdown";

type Props = {};

function DropdownPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Dropdown</div>
      <div className="text-sm">
        A dropdown is a UI component that presents a list of options for users
        to choose from.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Dropdown
          name="Frequency"
          items={["Immediate", "Daily Summary", "Weekly Digest"]}
        />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.dropdown} language="js" />
    </div>
  );
}

export default DropdownPage;
