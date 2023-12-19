import React, { useState } from "react";
import { Button } from "../components/button";
import Dialog from "../components/dialog";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function DialogPage({}: Props) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Dialog</div>
      <div className="text-sm">
        A dialog is an element that temporarily interrupts the normal flow to
        prompt or display important information, choices, or actions.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Button onClick={() => setOpenDialog(!openDialog)}>Open Dialog</Button>
        <Dialog active={openDialog} setActive={setOpenDialog}>
          <div className="flex flex-col gap-6 items-start">
            Are you sure you want to make the changes?
            <div className="flex flex-row w-full justify-evenly items-center">
              <Button>Yes, I am</Button>
              <Button variant="ghost">Discard</Button>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="">
        <span className="font-semibold">NOTE: </span>
        Place a {`"<div>"`} with id "dialog" in your index.html to facilitate
        dialog rendering, like below:
        <Code code={`<div id="dialog"></div>`} language="html" />
      </div>
      <Code code={COMPONENTS.dialog} language="js" />
    </div>
  );
}

export default DialogPage;
