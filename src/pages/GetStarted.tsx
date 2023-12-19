import React, { useEffect } from "react";
import Code from "../components/code";
import "./GetStarted.css";
import Prism from "prismjs";

type Props = {};

function GetStarted({}: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="text-text-color max-w-6xl font-normal text-md space-y-6 p-4">
      {/* GetStarted 1. tailwind, follow insttructions for the framework from
      official docs 1. install lucide icons, or any other icon pack 2. install
      tailwind-merge npm package 3. tailwind config */}
      <div className="text-3xl font-semibold">Get Started</div>
      <div className="space-y-1">
        <div className="text-lg font-semibold">Install Tailwind</div>
        <div className="text-md">
          Follow the instructions for installing Tailwind CSS from the official
          documentation. Ensure that your project is configured with the
          necessary files such as tailwind.config.js.
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold">Install Lucide Icons</div>
        <div className="text-md">
          Choose an icon pack of your preference and install it in your project.
          For example, you can install Lucide Icons using npm or yarn:
          <pre className="">
            <code className={`language-shell `}>
              {"npm install lucide-react\nor\nyarn add lucide-react"}
            </code>
          </pre>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold">Install tailwind-merge</div>
        <div className="text-md">
          Enhance your Tailwind CSS workflow with the tailwind-merge npm
          package. Install it using the following command:{" "}
          <pre className="">
            <code className={`language-shell `}>
              {`npm install tailwind-merge\nor\nyarn add tailwind-merge`}{" "}
            </code>
          </pre>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold">Tailwind Configuration</div>
        <div className="text-md">
          Configure Tailwind CSS in your project by customizing the
          tailwind.config.js file. Adjust the settings according to your design
          requirements.
          <pre className="">
            <code className={`language-javascript `}>
              {`
    //....
    extend: {
      colors: {
        "background-color": "#F9FAFB",
        "text-color": "#111827",
        primary: "#3B82F6",
        secondary: "#22D3EE",
        "border-color": "#E5E7EB",
        placeholder: "#A1A1AA",
      },
    }
    //....
    `}{" "}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
