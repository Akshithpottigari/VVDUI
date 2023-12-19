import React from "react";
import { Button } from "../components/button";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function ButtonPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Button</div>
      <div className="text-sm">
        A button is a clickable element that triggers an action, facilitating
        user interactions.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color gap-3 w-full  flex justify-center border rounded-lg p-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.button} language="js" />
    </div>
  );
}

export default ButtonPage;
