export default function Badge({ text }: { text: string }) {
  return (
    <div className="rounded-full backdrop-blur-3xl bg-primary/30 cursor-pointer px-3 py-1.5 text-sm font-bold hover:bg-primary/60 duration-500">
      {text}
    </div>
  );
}
