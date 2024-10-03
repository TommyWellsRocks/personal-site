import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LinkTo({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="ml-auto flex underline hover:text-slate-300"
      target="_blank"
    >
      {label}
      <ArrowUpRight width={20} />
    </Link>
  );
}
