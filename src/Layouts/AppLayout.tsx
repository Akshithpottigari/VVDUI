/// <reference types="vite-plugin-svgr/client" />
import React, { useState } from "react";
import Navbar from "../components/navbar";
import VVDUILogo from "../assets/VVDUI.svg?react";
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../constants";
import { Github, Menu } from "lucide-react";
import { Button } from "../components/button";
import { Sidebar } from "../components/sidebar";
import "./AppLayout.css";

type Props = {};

function AppLayout({}: Props) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const navigate = useNavigate();
  let links = [
    // { name: "Home", link: ROUTE_PATHS.HOME },
    // { name: "Get Started", link: ROUTE_PATHS.GET_STARTED },
    // { name: "About me", link: ROUTE_PATHS.ABOUT_ME },
    { name: "Accordion", link: ROUTE_PATHS.ACCORDION },
    { name: "Alert", link: ROUTE_PATHS.ALERT },
    { name: "Avatar", link: ROUTE_PATHS.AVATAR },
    { name: "Badge", link: ROUTE_PATHS.BADGE },
    { name: "Button", link: ROUTE_PATHS.BUTTON },
    { name: "Card", link: ROUTE_PATHS.CARD },
    { name: "Checkbox", link: ROUTE_PATHS.CHECKBOX },
    { name: "Dialog", link: ROUTE_PATHS.DIALOG },
    { name: "Dropdown", link: ROUTE_PATHS.DROPDOWN },
    { name: "Input", link: ROUTE_PATHS.INPUT },
    { name: "Navbar", link: ROUTE_PATHS.NAVBAR },
    { name: "Select", link: ROUTE_PATHS.SELECT },
    { name: "Sidebar", link: ROUTE_PATHS.SIDEBAR },
    { name: "Tabs", link: ROUTE_PATHS.TABS },
    { name: "Textarea", link: ROUTE_PATHS.TEXTAREA },
    { name: "Tooltip", link: ROUTE_PATHS.TOOLTIP },
  ];

  const handleLinkClick = (path: string) => {
    setIsDrawerActive(false);
    navigate(`${path}`);
  };

  return (
    <div className="bg-background-color h-full w-full">
      <Navbar
        className="h-14 border-b border-border-color  top-0 flex px-3 py-2 justify-between items-center"
        blur={true}
        type="fixed"
      >
        <Link
          to={ROUTE_PATHS.HOME}
          className="text-text-color bg-transparent font-semibold flex flex-row items-center gap-3 text-xl "
        >
          <VVDUILogo className="w-4 h-4 shadow-lg" />
          <div className="">VVDUI</div>
        </Link>
        <div className="flex flex-row gap-3 items-center">
          <Button
            variant="outline"
            onClick={() => setIsDrawerActive(true)}
            className="md:hidden"
          >
            <Menu className="w-4 h-4" />
          </Button>
          <Sidebar open={isDrawerActive} setOpen={setIsDrawerActive}>
            <div className="text-text-color h-full w-full overflow-y-scroll space-y-5">
              <div className="flex flex-row items-center mb-4 gap-3 text-xl">
                <VVDUILogo className="w-4 h-4" />
                {/* <img src={VVDUILogo} className="w-4 h-4" alt="logo" /> */}
                VVDUI
              </div>

              <div className="font-normal flex flex-col gap-3">
                <div className="font-semibold">Explore</div>
                <div
                  onClick={() => handleLinkClick(ROUTE_PATHS.HOME)}
                  className="cursor-pointer"
                >
                  Home
                </div>
                <div
                  onClick={() => handleLinkClick(ROUTE_PATHS.GET_STARTED)}
                  className="cursor-pointer"
                >
                  Get Started
                </div>
                {/* <div
                onClick={() => handleLinkClick(ROUTE_PATHS.ABOUT_ME)}
                className="cursor-pointer"
              >
                About Me
              </div> */}
              </div>
              <div className="">
                <div className="font-semibold">Components</div>
                <div className="flex mt-3 flex-col gap-3">
                  {links.map((link, index) => (
                    <div
                      key={index}
                      onClick={() => handleLinkClick(link.link)}
                      className="font-normal cursor-pointer duration-500"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Sidebar>
          <a href="https://github.com/Akshithpottigari/VVDUI">
            <Github className="w-6 h-6 fill-none cursor-pointer hover:stroke-primary duration-500" />
          </a>
        </div>
      </Navbar>
      <aside className="hidden h-[calc(100svh-56px)] max-h-[calc(100svh-56px)] bg-background-color p-4 md:block scrollbar w-[300px] fixed top-16">
        <div className="text-text-color h-full w-full overflow-y-scroll space-y-5">
          <div className="font-normal flex flex-col gap-3">
            <div className="font-semibold">Explore</div>
            <div
              onClick={() => handleLinkClick(ROUTE_PATHS.HOME)}
              className="cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => handleLinkClick(ROUTE_PATHS.GET_STARTED)}
              className="cursor-pointer"
            >
              Get Started
            </div>
            {/* <div
              onClick={() => handleLinkClick(ROUTE_PATHS.ABOUT_ME)}
              className="cursor-pointer"
            >
              About Me
            </div> */}
          </div>
          <div className="">
            <div className="font-semibold">Components</div>
            <div className="flex mt-3 flex-col gap-3">
              {links.map((link, index) => (
                <div
                  key={index}
                  onClick={() => handleLinkClick(link.link)}
                  className="font-normal duration-500 cursor-pointer"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div className="mt-14 min-h-[dvh] md:min-w-[100vw-300px] flex items-center  mx-auto bg-background-color md:ml-[300px]  px-4 py-2 ">
        {/* h-[calc(100vh-56px)] */}
        {/* <div className=""> */}
        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}

export default AppLayout;
