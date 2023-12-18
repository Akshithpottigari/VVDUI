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
            style={{ transform: `rotate(${isActiveSelect ? "180deg" : "0"})` }}
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
