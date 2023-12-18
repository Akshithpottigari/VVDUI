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
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div className="w-[500px] rounded-md border text-text-color border-border-color">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "var(--border) solid 2px" : "0px" }}
        className="flex w-full items-center justify-between rounded-[5px] border-border-color bg-none p-5 font-bold"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {question}
        <ChevronDown
          style={{ transform: `rotate(${showContent ? "180deg" : "0"})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out duration-500"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : "0" }}
        className="overflow-hidden rounded-[5px] bg-none font-bold transition-[height] ease-in-out duration-500"
      >
        <p className="p-5">{answer}</p>
      </div>
    </div>
  );
}
