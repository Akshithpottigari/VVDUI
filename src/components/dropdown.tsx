import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Dropdown({
  items,
  name,
}: {
  items: string[];
  name: string;
}) {
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
          {name}
          <ChevronDown
            style={{
              transform: `rotate(${isActiveDropdown ? "180deg" : "0"})`,
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
              className="block cursor-pointer w-full border border-border-color bg-primary px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-primary/60 duration-500"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}
