import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import { Button } from "./button";

export default function Code({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(code);
    } else {
      document.execCommand("copy", true, code);
    }

    setIsCopied(true);

    // Revert to previous state after 300 seconds (300000 milliseconds)
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="">
      <pre className="">
        <code data-prismjs-copy="Copy" className={`language-${language} `}>
          {code}
        </code>
      </pre>
      <Button className="" onClick={handleCopy}>
        {isCopied ? "Text Copied!" : "Copy to Clipboard"}
      </Button>
    </div>
  );
}
