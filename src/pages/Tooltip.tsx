import React from "react";
import { Button } from "../components/button";
import Tooltip from "../components/tooltip";
import { Edit } from "lucide-react";
import Code from "../components/code";
import { COMPONENTS } from "../constants";

type Props = {};

function TooltipPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Tooltip</div>
      <div className="text-sm">
        A tooltip is a brief, contextual message that appears on hover,
        providing additional information or guidance.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Tooltip
          tooltip="Edit Details"
          elementToHover={
            <Button variant="outline">
              <Edit className="w-4 h-4 stroke-text-color" />
            </Button>
          }
        />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.tooltip} language="js" />
    </div>
  );
}

export default TooltipPage;
