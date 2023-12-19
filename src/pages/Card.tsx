import React from "react";
import { Button } from "../components/button";
import Card from "../components/card";
import Code from "../components/code";
import { COMPONENTS } from "../constants";

type Props = {};

function CardPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Card</div>
      <div className="text-sm">
        A card is used to present organized and visually appealing information
        or content in a structured format.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Card
          heading="Save changes?"
          paragraph="Are you sure you want to save changes?"
        >
          <div className="flex flex-row w-full justify-evenly items-center">
            <div className="flex flex-row w-full justify-evenly items-center">
              <Button>Yes, I am</Button>
              <Button variant="ghost">Discard</Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.card} language="js" />
    </div>
  );
}

export default CardPage;
