export function PageHeader({ header }: { header: string }) {
  return (
    <span className="font-bold text-slate-200 text-5xl">{header.toUpperCase()}</span>
  );
}
