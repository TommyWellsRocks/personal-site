export function SectionHeader({ header }: { header: string }) {
  return (
    <span className="font-bold text-slate-300">{header.toUpperCase()}</span>
  );
}
