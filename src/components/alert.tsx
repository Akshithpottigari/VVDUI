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
