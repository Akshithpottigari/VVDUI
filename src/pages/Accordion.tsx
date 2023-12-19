import React, { useEffect } from "react";
import Accordion from "../components/accordion";
import Code from "../components/code";
import { COMPONENTS } from "../constants";
type Props = {};

function AccordionPage({}: Props) {
  const content = [
    {
      question: "Why choose VVDUI?",
      answer:
        "VVDUI is offers a collection of components, written using React and Tailwind, providing a modern and visually appealing components for your projects.",
    },
    {
      question: "What sets VVDUI apart from other component libraries?",
      answer:
        "VVDUI stands out with its focus on subtle blurs, sleek animations, and a commitment to reusability. It provides a delightful user experience while allowing developers the flexibility to modify components to meet specific project requirements.",
    },
    {
      question: "What advantages does VVDUI offer in terms of customization?",
      answer:
        "VVDUI is designed with customization in mind, allowing developers to easily tailor components to match their unique project aesthetics and requirements, fostering a personalized and distinctive user interface.",
    },
  ];
  return (
    <div className="text-text-color max-w-6xl w-full flex flex-col justify-center font-normal text-md space-y-6 p-4">
      <div className="text-3xl font-semibold">Accordion</div>
      <div className="text-sm">
        An accordion expands and collapses sections
        of content, providing a space-efficient way to display information in a
        structured manner.
      </div>
      <div className="text-xl font-bold">Example</div>
      <div className="border-border-color w-full  flex justify-center border rounded-lg p-4">
        <div className="">
          {content.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      {/* using utils get code function, keep below */}
      <div className="text-xl font-bold">Component Code Snippet</div>
      <Code code={COMPONENTS.accordion} language="js" />
    </div>
  );
}

export default AccordionPage;
