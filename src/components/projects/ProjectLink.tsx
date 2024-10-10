import Link from "next/link";

export function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      target="_blank"
      href={href}
      className="text-sm font-semibold text-slate-500 hover:text-slate-300 flex"
    >
      {label}
    </Link>
  );
}
