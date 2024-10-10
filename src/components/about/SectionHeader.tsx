export function SectionHeader({ header }: { header: string }) {
  return (
    <span className="text-xl font-bold text-slate-400">
      {header.toUpperCase()}
    </span>
  );
}
