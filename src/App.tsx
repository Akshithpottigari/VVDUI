import { useState } from "react";
import VVDUILogo from "./assets/VVDUI.svg";
import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import { ROUTE_PATHS } from "./constants";
import AppLayout from "./Layouts/AppLayout";
import Accordion from "./pages/Accordion";
import Alert from "./pages/Alert";
import Avatar from "./pages/Avatar";
import Badge from "./pages/Badge";
import Card from "./pages/Card";
import Checkbox from "./pages/Checkbox";
import Dialog from "./pages/Dialog";
import Dropdown from "./pages/Dropdown";
import Input from "./pages/Input";
import Navbar from "./pages/Navbar";
import Select from "./pages/Select";
import Sidebar from "./pages/Sidebar";
import Tabs from "./pages/Tabs";
import TextArea from "./pages/TextArea";
import Tooltip from "./pages/Tooltip";
import Aboutme from "./pages/Aboutme";
import GetStarted from "./pages/GetStarted";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const code = `import React, { useEffect } from "react";
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.css";
  import "./styles.css";`;

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const tabs = [
    { key: "1", content: "Tab1" },
    { key: "2", content: "Tab2" },
    { key: "3", content: "Tab3" },
  ];
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PATHS.GET_STARTED} element={<GetStarted />} />
          <Route path={ROUTE_PATHS.ACCORDION} element={<Accordion />} />
          <Route path={ROUTE_PATHS.ALERT} element={<Alert />} />
          <Route path={ROUTE_PATHS.AVATAR} element={<Avatar />} />
          <Route path={ROUTE_PATHS.BADGE} element={<Badge />} />
          <Route path={ROUTE_PATHS.CARD} element={<Card />} />
          <Route path={ROUTE_PATHS.CHECKBOX} element={<Checkbox />} />
          <Route path={ROUTE_PATHS.DIALOG} element={<Dialog />} />
          <Route path={ROUTE_PATHS.DROPDOWN} element={<Dropdown />} />
          <Route path={ROUTE_PATHS.INPUT} element={<Input />} />
          <Route path={ROUTE_PATHS.NAVBAR} element={<Navbar />} />
          <Route path={ROUTE_PATHS.SELECT} element={<Select />} />
          <Route path={ROUTE_PATHS.SIDEBAR} element={<Sidebar />} />
          <Route path={ROUTE_PATHS.TABS} element={<Tabs />} />
          <Route path={ROUTE_PATHS.TEXTAREA} element={<TextArea />} />
          <Route path={ROUTE_PATHS.TOOLTIP} element={<Tooltip />} />
          {/* <Route path={ROUTE_PATHS.ABOUT_ME} element={<Aboutme />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return (
    // <div className="">
    //   {/* <Code code={code} language={"javascript"} /> */}
    //   <Accordion
    //     question="Lorem ips"
    //     answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima, veniam sunt ullam voluptates, aliquid tempore consequatur, blanditiis laborum! Consequuntur hic veritatis deserunt! Iusto, nisi!"
    //   />
    //   <Alert message="Please note that the event starts at 7:00 PM." />
    //   <Avatar imageLink="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg" />
    //   <Badge text="Badge" />
    //   <Button>Button</Button>
    //   <Card
    //     heading="Save changes?"
    //     paragraph="Are you sure you want to save changes?"
    //   >
    //     <div className="flex flex-row w-full justify-evenly items-center">
    //       <div className="flex flex-row w-full justify-evenly items-center">
    //         <Button>Yes, I am</Button>
    //         <Button variant="ghost">Discard</Button>
    //       </div>
    //     </div>
    //   </Card>
    //   <Checkbox text="text 1" />
    //   <Checkbox text="text 2" />
    //   <Checkbox text="text 3" />
    //   {/* Checkbox */}
    //   <Button onClick={() => setOpenSideBar(!openSideBar)}>Open sidebar</Button>
    //   <Sidebar open={openSideBar} setOpen={setOpenSideBar}>
    //     <div className="space-y-4">
    //       <div className="text-text-color flex flex-row items-center mb-4 gap-3 text-xl">
    //         <img src={VVDUILogo} className="App-logo w-4 h-4" alt="logo" />
    //         VVDUI
    //       </div>
    //       <div className="flex flex-col justify-center gap-3">
    //         <div className="text-text-color/50 text-sm">Item 1</div>
    //         <div className="text-text-color/50 text-sm">Item 2</div>
    //         <div className="text-text-color/50 text-sm">Item 3</div>
    //       </div>
    //     </div>
    //   </Sidebar>
    //   <div className="">
    //     Sidebar don't forget to add
    //     {` <div id="drawer"></div>`}
    //     to index.html
    //   </div>
    //   {/* Checkbox ends */}
    //   {/* Dropdown start */}
    //   <Dropdown items={["Item 1", "Item 2", "Item 3"]} />
    //   {/* Dropdown end */}
    //   <Input variant="primary" placeholder="Username" />
    //   {/* Dialog start */}
    //   // don't forget to add // <div id="modal"></div>
    //   // to index.html
    //   <Button onClick={() => setOpenDialog(!openDialog)}>Open Dialog</Button>
    //   <Dialog active={openDialog} setActive={setOpenDialog}>
    //     <div className="flex flex-col gap-6 items-start">
    //       Are you sure you want to make the changes?
    //       <div className="flex flex-row w-full justify-evenly items-center">
    //         <Button>Yes, I am</Button>
    //         <Button variant="ghost">Discard</Button>
    //       </div>
    //     </div>
    //   </Dialog>
    //   {/* Dialog ends  */}
    //   <Select items={["Item 1", "Item 2", "Item 3"]} />
    //   {/* Navbar Start */}
    //   <Navbar blur={true} type="fixed">
    //     <div className="text-text-color flex flex-row items-center gap-3 text-2xl">
    //       <img src={VVDUILogo} className="App-logo w-6 h-6" alt="logo" />
    //       VVDUI
    //     </div>
    //   </Navbar>
    //   {/* Navbar end */}
    //   <Tabs
    //     tabsArray={tabs}
    //     activeTab={activeTab}
    //     setActiveTab={setActiveTab}
    //   />
    //   <TextArea placeholder="Write here..." />
    //   <Tooltip
    //     tooltip="Edit"
    //     elementToHover={
    //       <Button variant="outline">
    //         <Edit className="w-4 h-4 stroke-text-color" />
    //       </Button>
    //     }
    //   />
    // </div>
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
