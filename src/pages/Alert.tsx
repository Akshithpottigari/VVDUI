import Alert from "../components/alert";
import Code from "../components/code";
import React from "react";
import { COMPONENTS } from "../constants";

type Props = {};

function AlertPage({}: Props) {
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Alert</div>
      <div className="text-sm">
        An alert is a concise and user-friendly notification that conveys
        important information or prompts an action within a web application.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Alert message="Please note that the event starts at 7:00 PM." />
      </div>
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.alert} language="js" />
    </div>
  );
}

export default AlertPage;
