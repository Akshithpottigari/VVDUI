import React, { useState } from "react";
import { Button } from "../components/button";
import { Sidebar } from "../components/sidebar";
import Code from "../components/code";
import { COMPONENTS } from "../constants";
import VVDUILogo from "../assets/VVDUI.svg";

type Props = {};

function SidebarPage({}: Props) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Sidebar</div>
      <div className="text-sm">
        A sidebar is a vertical panel typically containing
        navigation links, providing users with quick access to different
        sections.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Button onClick={() => setOpenSideBar(!openSideBar)}>
          Open sidebar
        </Button>
        <Sidebar open={openSideBar} setOpen={setOpenSideBar}>
          <div className="space-y-4">
            <div className="text-text-color flex flex-row items-center mb-4 gap-3 text-xl">
              <img src={VVDUILogo} className="App-logo w-4 h-4" alt="logo" />
              VVDUI
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="text-text-color/50 text-sm">Item 1</div>
              <div className="text-text-color/50 text-sm">Item 2</div>
              <div className="text-text-color/50 text-sm">Item 3</div>
            </div>
          </div>
        </Sidebar>
      </div>
      <div className="">
        <span className="font-semibold">NOTE: </span>
        Place a {`"<div>"`} with id "sidebar" in your index.html to facilitate
        sidebar rendering, like below:
        <Code code={`<div id="sidebar"></div>`} language="html" />
      </div>
      <Code code={COMPONENTS.sidebar} language="js" />
    </div>
  );
}

export default SidebarPage;
