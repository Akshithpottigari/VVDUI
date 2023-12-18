type Props = {
  heading: string;
  paragraph: string;
  children?: any;
};

export default function Card({ heading, paragraph, children }: Props) {
  return (
    <div className="w-[250px] flex flex-col items-start p-4 justify-center rounded-md border border-border-color font-semibold">
      <div className="border-b border-border-color p-4 w-full">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4 text-text-color/70 font-normal text-sm">
        <p>{paragraph}</p>
      </div>
      {children}
    </div>
  );
}
