import React, { useState } from "react";
import Tabs from "../components/tabs";
import { COMPONENTS } from "../constants";
import Code from "../components/code";

type Props = {};

function TabsPage({}: Props) {
  const [activeTab, setActiveTab] = useState("1");
  const tabs = [
    { key: "1", label: "Tasks", content:"Tasks Content" },
    { key: "2", label: "Calendar", content:"Calendar Content" },
    { key: "3", label: "Reports", content:"Reports Content" },
  ];
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Tabs</div>
      <div className="text-sm">
        Tabs are a user interface design pattern used to organize and navigate
        between multiple sections.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Tabs
          tabsArray={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <Code code={COMPONENTS.tabs} language="js" />
    </div>
  );
}

export default TabsPage;
