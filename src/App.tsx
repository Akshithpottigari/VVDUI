import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import VVDUILogo from "./assets/VVDUI.svg";
import "./App.css";
import Code from "./components/code";
import Accordion from "./components/accordion";
import Alert from "./components/alert";
import Avatar from "./components/avatar";
import Badge from "./components/badge";
import Card from "./components/card";
import { Button } from "./components/button";
import Checkbox from "./components/checkbox";
import { Sidebar } from "./components/sidebar";
import Dropdown from "./components/dropdown";
import { Input } from "./components/input";
import Dialog from "./components/dialog";
import Select from "./components/select";

function App() {
  const code = `import React, { useEffect } from "react";
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.css";
  import "./styles.css";`;

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="font-bold">
      {/* <Code code={code} language={"javascript"} /> */}
      <Accordion
        question="Lorem ips"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima, veniam sunt ullam voluptates, aliquid tempore consequatur, blanditiis laborum! Consequuntur hic veritatis deserunt! Iusto, nisi!"
      />
      <Alert message="Please note that the event starts at 7:00 PM." />
      <Avatar imageLink="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg" />
      <Badge text="Badge" />
      <Button text="Button" />
      <Card
        heading="Save changes?"
        paragraph="Are you sure you want to save changes?"
      >
        <div className="flex flex-row w-full justify-evenly items-center">
          <Button text="Yes, I am" />
          <Button variant="ghost" text="Discard" />
        </div>
      </Card>
      <Checkbox text="text 1" />
      <Checkbox text="text 2" />
      <Checkbox text="text 3" />
      {/* Checkbox */}
      <Button
        text="Open sidebar"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
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
      <div className="">
        Sidebar don't forget to add
        {` <div id="drawer"></div>`}
        to index.html
      </div>
      {/* Checkbox ends */}
      {/* Dropdown start */}
      <Dropdown items={["Item 1", "Item 2", "Item 3"]} />
      {/* Dropdown end */}
      <Input variant="primary" placeholder="Username" />
      {/* Dialog start */}
      // don't forget to add // <div id="modal"></div>
      // to index.html
      <Button onClick={() => setOpenDialog(!openDialog)} text="Open dialog" />
      <Dialog active={openDialog} setActive={setOpenDialog}>
        <div className="flex flex-col gap-6 items-start">
          Are you sure you want to make the changes?
          <div className="flex flex-row w-full justify-evenly items-center">
            <Button text="Yes, I am" />
            <Button variant="ghost" text="Discard" />
          </div>
        </div>
      </Dialog>
      {/* Dialog ends  */}
      <Select items={["Item 1", "Item 2", "Item 3"]} />
    </div>
  );
}

export default App;
