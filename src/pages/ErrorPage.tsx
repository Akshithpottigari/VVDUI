import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../constants";
import VVDUILogo from "../assets/VVDUI.svg";
import { Button } from "../components/button";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div className="w-screen h-screen bg-background-color text-text-color flex flex-col items-center justify-center gap-6">
      <Link
        to={ROUTE_PATHS.HOME}
        className="text-text-color font-medium flex flex-row items-center gap-3 text-5xl"
      >
        <img src={VVDUILogo} className="w-12 h-12" alt="logo" />
        VVDUI
      </Link>
      <div className="font-semi-bold text-2xl">404 - Not Found</div>
      <div className="">
        The page you are looking for might be in another universe.
      </div>
      <Link to={ROUTE_PATHS.HOME}>
        <Button variant="outline" className="text-md">
          Go To Home
        </Button>
      </Link>
    </div>
  );
}
