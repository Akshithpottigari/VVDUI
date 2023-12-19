export enum ROUTE_PATHS {
  HOME = "/",
  GET_STARTED = "get-started",
  ACCORDION = "accordion",
  ALERT = "alert",
  AVATAR = "avatar",
  BADGE = "badge",
  BUTTON = "button",
  CARD = "card",
  CHECKBOX = "checkbox",
  DIALOG = "dialog",
  DROPDOWN = "dropdown",
  INPUT = "input",
  NAVBAR = "navbar",
  SELECT = "select",
  SIDEBAR = "sidebar",
  TABS = "tabs",
  TEXTAREA = "textarea",
  TOOLTIP = "tooltip",
  ABOUT_ME = "about-me"
};


// Thought of making a utility function which reads content dynamically of a component .tsx, instead of doing this:
export const COMPONENTS = {
  accordion: `
    import { ChevronDown } from "lucide-react";
    import { useEffect, useRef, useState } from "react";
    
    type Props = {
      question: string;
      answer: string;
    };
    
    export default function Accordion({ question, answer }: Props) {
      const [showContent, setShowContent] = useState(false);
      const [contentHeight, setContentHeight] = useState("0px");
      const contentRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (contentRef.current) {
          setContentHeight(\`\${contentRef.current.scrollHeight}px\`);
        }
      }, [showContent]);
    
      return (
        <div className="w-full rounded-md border text-text-color border-border-color">
          <button
            role="button"
            aria-expanded={showContent}
            style={{
              borderBottom: showContent ? "var(--border) solid 2px" : "0px",
            }}
            className="flex w-full items-center justify-between rounded-[5px] border-border-color bg-none p-5 font-bold"
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            <span className="text-left">{question}</span>
            <ChevronDown
              style={{ transform: \`rotate(\${showContent ? "180deg" : "0"})\` }}
              className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out duration-500"
            />
          </button>
          <div
            ref={contentRef}
            style={{ height: showContent ? \`\${contentHeight}\` : "0" }}
            className="overflow-hidden rounded-[5px] font-normal bg-none transition-[height] ease-in-out duration-500"
          >
            <p className="p-5">{answer}</p>
          </div>
        </div>
      );
    }
    `,
  alert: `
    import { AlertCircle } from "lucide-react";

    export default function Alert({ message }: { message: string }) {
      return (
        <div
          role="alert"
          className="flex items-center justify-center rounded-md border border-border-color p-5 px-8 font-bold"
        >
          <AlertCircle className="mr-3 stroke-primary h-6 min-h-[24px] w-6 min-w-[24px]" />
          {message}
        </div>
      );
    }
    `,
  avatar: `
    import React from "react";

    type Props = {
      imageLink: string;
    };
    
    export default function Avatar({ imageLink }: Props) {
      return (
        <div
          style={{
            backgroundImage: \`url(\${imageLink})\`,
          }}
          className="h-16 w-16 rounded-full border border-border-color bg-cover bg-center hover:border-primary duration-500"
        ></div>
      );
    }
    
    
    `,
  badge: `
  export default function Badge({ text }: { text: string }) {
    return (
      <div className="w-min rounded-full backdrop-blur-3xl bg-primary/30 cursor-pointer px-3 py-1.5 text-sm font-bold hover:bg-primary/60 duration-500">
        {text}
      </div>
    );
  }`,
  button: `
  import React from "react";
  import { twMerge } from "tailwind-merge";
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost" | "outline"; // Define your variants here
    children?: any;
    className?: string;
  }
  
  export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, children, ...props }, ref) => {
      const Comp = asChild ? "span" : "button";
      let variantClass = "";
      switch (variant) {
        case "secondary":
          variantClass = "bg-secondary hover:bg-secondary/60";
          break;
        case "ghost":
          variantClass = "bg-gray-200 hover:bg-gray-200/60";
          break;
        case "outline":
          variantClass =
            "bg-transparent border-border-color border-2 hover:bg-gray-200/60";
          break;
        default:
          variantClass = "bg-primary hover:bg-primary/60";
      }
      return (
        <Comp
          {...props}
          ref={ref}
          className={twMerge(
            \`w-fit rounded-lg backdrop-blur-3xl cursor-pointer px-3 py-1.5 text-sm font-bold duration-500 \${variantClass}\`,
            className
          )}
        >
          {children}
        </Comp>
      );
    }
  );`,
  card: `
  type Props = {
    heading: string;
    paragraph: string;
    children?: any;
  };
  
  export default function Card({ heading, paragraph, children }: Props) {
    return (
      <div className="w-[250px] flex flex-col items-start p-4 justify-center rounded-md border border-border-color font-semibold">
        <div className="border-b border-border-color p-4 w-full">
          <h2 className="text-lg">{heading}</h2>
        </div>
        <div className="p-4 text-text-color/70 font-normal text-sm">
          <p>{paragraph}</p>
        </div>
        {children}
      </div>
    );
  }
  `,
  checkbox: `
  import { X } from "lucide-react";
  import { useState } from "react";
  
  interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost" | "outline"; // Define your variants here
  }
  
  export default function Checkbox({ text, variant, ...props }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <button
        {...props}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        className="my-2 flex items-center font-bold"
        role="checkbox"
        aria-checked={isChecked}
      >
        <div className="mr-2.5 grid h-5 w-5 place-items-center rounded-[5px] outline outline-2 outline-border-color">
          {isChecked && <X className="h-4 w-4 stroke-primary" />}
        </div>
        <p>{text}</p>
      </button>
    );
  }
  
  `,
  dialog: `
  import { X } from "lucide-react";
  import React, { useEffect, useState } from "react";
  import ReactDom from "react-dom";
  
  type Props = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
  };
  
  export default function Dialog({ active, setActive, children }: Props) {
    const [isVisible, setIsVisible] = useState(false);
  
    const closeDialog = () => {
      setIsVisible(false);
      setTimeout(() => {
        setActive(false);
      }, 300);
    };
  
    useEffect(() => {
      if (active) {
        setIsVisible(true);
      }
    }, [active]);
  
    if (!active) return null;
  
    return ReactDom.createPortal(
      <div
        role="dialog"
        aria-modal="true"
        className="z-10 fixed bg-background-color/70 left-0 top-0 backdrop-blur-md  flex h-screen w-screen items-center justify-center"
      >
        <div
          style={{
            opacity: isVisible ? "1" : "0",
            visibility: isVisible ? "visible" : "hidden",
          }}
          className="relative bg-background-color flex w-[350px] flex-col items-center justify-center rounded-md border border-border-color bg-background p-6 font-bold transition-all duration-500 "
        >
  
          <button onClick={closeDialog}>
            <X className="absolute right-3 top-3 h-6 w-6" />
          </button>
          {children}
        </div>
      </div>,
      document.getElementById("dialog") as HTMLElement
    );
  }
  
  `,
  dropdown: `
  import { ChevronDown } from "lucide-react";
  import { useState } from "react";
  
  export default function Dropdown({ items }: { items: string[] }) {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  
    return (
      <div className="relative">
        <button
          aria-haspopup="listbox"
          aria-expanded={isActiveDropdown}
          onClick={() => {
            setIsActiveDropdown(!isActiveDropdown);
          }}
          className="flex w-[200px] cursor-pointer items-center rounded-md border border-border-color bg-primary px-7 py-3 font-bold  hover:shadow-none duration-500 hover:bg-primary/60"
        >
          <div className="mx-auto flex items-center">
            Dropdown
            <ChevronDown
              style={{
                transform: \`rotate(\${ isActiveDropdown ? "180deg" : "0"})\`,
              }}
              className={
                "ml-3 h-4 w-4 transition-transform ease-in-out duration-500"
              }
            />
          </div>
        </button>
        <div
          role="listbox"
          style={{
            opacity: isActiveDropdown ? "1" : "0",
            visibility: isActiveDropdown ? "visible" : "hidden",
          }}
          className="absolute z-10 left-0 top-[53px] w-[200px] rounded-md border border-border-color text-center font-bold text-text-color shadow-lg transition-all duration-500"
        >
          {items.map((item, index) => {
            return (
              <a
                key={index}
                className="block w-full border border-border-color bg-primary px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-primary/60 duration-500"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
  `,
  input: `
  import React from "react";

  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost"; // Define your variants here
  }
  export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
      const Comp = asChild ? "span" : "input";
      let variantClass = "";
      switch (variant) {
        case "secondary":
          variantClass = "border-secondary border";
          break;
        case "ghost":
          variantClass = "border-border-color border";
          break;
        default:
          variantClass = "border-primary border";
      }
      return (
        <Comp
          {...props}
          ref={ref}
          className={\`w-fit text-text-color placeholder-placeholder rounded-md backdrop-blur-3xl px-3 py-1.5 text-sm font-semibold duration-500 \${variantClass}\`}
        ></Comp>
      );
    }
  );
  `,
  navbar: `
  import React from "react";
  import { twMerge } from "tailwind-merge";
  
  type Props = {
    type: "fixed" | "scrollable";
    blur: boolean;
    children?: any;
    className?: string;
  };
  
  export default function Navbar({ type, blur, children, className }: Props) {
    let position = "";
    switch (type) {
      case "fixed":
        position = "fixed z-20";
        break;
  
      default:
        position = "";
        break;
    }
    return (
      <div
        className={twMerge(
          \` w-full
          \${position}
          \${
            blur
              ? "backdrop-blur-md bg-background-color/70"
              : "bg-background-color"
          }\`,
          className
        )}
      >
        {children}
      </div>
    );
  }
  `,
  select: `
  import { useState } from "react";
  import { ChevronDown } from "lucide-react";
  
  export default function Select({ items }: { items: string[] }) {
    const [selectedItem, setSelectedItem] = useState<null | string>(null);
    const [isActiveSelect, setIsActiveSelect] = useState(false);
  
    const handleItemClick = (itemName: string) => {
      setSelectedItem(itemName);
      setIsActiveSelect(false);
    };
  
    return (
      <div className="relative" role="combobox" aria-expanded={isActiveSelect}>
        <button
          aria-haspopup="listbox"
          aria-expanded={isActiveSelect}
          onClick={() => {
            setIsActiveSelect(!isActiveSelect);
          }}
          className="flex w-[200px] cursor-pointer items-center rounded-md border border-border-color bg-primary px-7 py-3 font-bold  hover:shadow-none duration-500 hover:bg-primary/60"
        >
          <div className="mx-auto flex items-center">
            {selectedItem === null ? "Select" : selectedItem}
            <ChevronDown
              style={{ transform: \`rotate(\${isActiveSelect ? "180deg" : "0"})\` }}
              className={"ml-3 h-4 w-4 transition-transform ease-in-out"}
            />
          </div>
        </button>
        <div
          role="listbox"
          style={{
            opacity: isActiveSelect ? "1" : "0",
            visibility: isActiveSelect ? "visible" : "hidden",
          }}
          className="absolute z-10 left-0 top-[53px] w-[200px] rounded-md border border-border-color text-center font-bold text-text-color shadow-lg transition-all duration-500"
        >
          {items.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  handleItemClick(item);
                }}
                aria-selected={selectedItem === item}
                className="block w-full border border-border-color bg-primary px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-primary/60 duration-500"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  `,
  sidebar:`
  import { useEffect, useState } from "react";
  import ReactDom from "react-dom";
  import { twMerge } from "tailwind-merge";
  
  interface SidebarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: string | JSX.Element | JSX.Element[];
    className?: string;
  }
  
  export function Sidebar({ open, setOpen, children, className }: SidebarProps) {
    const [isVisible, setIsVisible] = useState(false);
  
    const closeDrawer = () => {
      setIsVisible(false);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    };
  
    useEffect(() => {
      if (open) {
        setIsVisible(true);
      }
    }, [open]);
  
    if (!open) return null;
    return ReactDom.createPortal(
      <div
        role="dialog"
        aria-modal="true"
        style={{
          opacity: isVisible ? "1" : "0",
          visibility: isVisible ? "visible" : "hidden",
        }}
        onClick={closeDrawer}
        className={twMerge(
          "fixed left-0 top-0 z-50 flex h-[100dvh] w-screen items-start justify-start bg-gray-200/50 backdrop-blur-md transition-all duration-500",
          className
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: \`translateX(\${isVisible ? "0" : "-300px"})\`,
          }}
          className="z-10 h-full w-[300px] border-r-2 border-border-color bg-background-color p-4 font-bold transition-transform duration-500"
        >
          {children}
        </div>
      </div>,
      document.getElementById("sidebar") as HTMLElement
    );
  }
  `,
  tabs: `
  import { ReactNode } from "react";

  type Props = {
    tabsArray: { key: string; content: ReactNode }[];
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  };
  
  export default function Tabs({ tabsArray, activeTab, setActiveTab }: Props) {
    return (
      <div className="">
        <div
          style={{
            gridTemplateColumns: Array(tabsArray.length)
              .fill("x")
              .map((tab: any) => "1fr")
              .join(" "),
          }}
          className="grid w-full rounded-md"
        >
          {tabsArray.map((tab, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(tab.key)}
                className={\`cursor-pointer border border-border-color px-6 py-3 text-center font-bold transition-colors first:rounded-ss-md last:rounded-se-md hover:bg-primary/60 duration-500 \${
                  activeTab === tab.key && "bg-primary"
                }\`}
              >
                {tab.content}
              </button>
            );
          })}
        </div>
        <div className="w-full p-5">
          {tabsArray.map((tab) => (
            <div
              key={tab.key}
              style={{ display: activeTab === tab.key ? "block" : "none" }}
            >
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  `,
  textarea: `
  import React from "react";

  export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    asChild?: boolean;
  }
  
  export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, asChild = false, ...props }, ref) => {
      const Comp = asChild ? "span" : "textarea";
      return (
        <Comp
          className="flex min-h-[80px] w-full rounded-md border border-border-color bg-background-color px-3 py-2 text-sm ring-offset-background placeholder:text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      );
    }
  );
  `,
  tooltip:`
  type Props = {
    elementToHover: React.ReactNode;
    tooltip: React.ReactNode;
  };
  
  export default function Tooltip({ elementToHover, tooltip }: Props) {
    return (
      <div className="group relative inline-block cursor-default text-center font-bold">
        {elementToHover}
        <div className="pointer-events-none absolute bottom-9 z-10 rounded-md border border-border-color bg-primary/30 backdrop-blur-md px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100">
          {tooltip}
        </div>
      </div>
    );
  }
  `
}