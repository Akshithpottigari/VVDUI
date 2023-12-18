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
      className="z-10 fixed left-0 top-0 backdrop-blur-md  flex h-screen w-screen items-center justify-center"
    >
      <div
        style={{
          opacity: isVisible ? "1" : "0",
          visibility: isVisible ? "visible" : "hidden",
        }}
        className="relative flex w-[350px] flex-col items-center justify-center rounded-md border border-border-color bg-background p-6 font-bold transition-all duration-500 "
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
