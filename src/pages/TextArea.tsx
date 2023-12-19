import React from "react";
import { TextArea } from "../components/textarea";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function TextAreaPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Textarea</div>
      <div className="text-sm">
        A textarea is a user interface element that allows for the input of
        multiline text.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <TextArea placeholder="Write here..." />
      </div>
      <Code code={COMPONENTS.textarea} language="js" />
    </div>
  );
}

export default TextAreaPage;
