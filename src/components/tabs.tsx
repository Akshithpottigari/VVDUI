import { ReactNode } from "react";

type Props = {
  tabsArray: { key: string; content: ReactNode; label: string }[];
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
              className={`cursor-pointer border border-border-color px-6 py-3 text-center font-bold transition-colors first:rounded-ss-md last:rounded-se-md hover:bg-primary/60 duration-500 ${
                activeTab === tab.key && "bg-primary"
              }`}
            >
              {tab.label}
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
