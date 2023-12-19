import React from "react";
import Badge from "../components/badge";
import Code from "../components/code";
import { COMPONENTS } from "../constants";

type Props = {};

function BadgePage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Badge</div>
      <div className="text-sm">
        A badge is a small visual element often used to highlight or indicate
        specific information, such as notifications, counts, or status.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Badge text="Notifications(3)" />
      </div>
      <Code code={COMPONENTS.badge} language="js" />
    </div>
  );
}

export default BadgePage;
