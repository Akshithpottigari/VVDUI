type Props = {
  elementToHover: React.ReactNode;
  tooltip: React.ReactNode;
};

export default function Tooltip({ elementToHover, tooltip }: Props) {
  return (
    <div className="group relative inline-block cursor-default text-center font-bold">
      {elementToHover}
      <div className="pointer-events-none absolute bottom-9 z-10 rounded-md border border-border-color bg-primary/30 backdrop-blur-md px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100">
        {tooltip}
      </div>
    </div>
  );
}
