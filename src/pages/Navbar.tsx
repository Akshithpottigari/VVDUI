import React from "react";
import Navbar from "../components/navbar";
import VVDUILogo from "../assets/VVDUI.svg";
import Code from "../components/code";
import { COMPONENTS } from "../constants";

type Props = {};

function NavbarPage({}: Props) {
  return (
    <div className="text-text-color w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Navbar</div>
      <div className="text-sm">
        A navbar typically contains links or navigation items, providing users
        with easy access to different sections.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <Navbar blur={false} type="scrollable">
          <div className="text-text-color flex flex-row items-center gap-3 text-2xl">
            <img src={VVDUILogo} className="App-logo w-6 h-6" alt="logo" />
            VVDUI
          </div>
        </Navbar>
      </div>
      <Code code={COMPONENTS.navbar} language="js" />
    </div>
  );
}

export default NavbarPage;
