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
