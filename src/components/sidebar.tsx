import { useEffect, useState } from "react";
import ReactDom from "react-dom";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: string | JSX.Element | JSX.Element[];
}

export function Sidebar({ open, setOpen, children }: SidebarProps) {
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
      className="fixed left-0 top-0 z-50 flex h-[100dvh] w-screen items-start justify-start bg-gray-200/50 backdrop-blur-md transition-all duration-500"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `translateX(${isVisible ? "0" : "-300px"})`,
        }}
        className="z-10 h-full w-[300px] border-r-2 border-border-color bg-background-color p-4 font-bold transition-transform duration-500"
      >
        {children}
      </div>
    </div>,
    document.getElementById("drawer") as HTMLElement
  );
}
