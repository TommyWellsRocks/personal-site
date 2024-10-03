import Link from "next/link";

export function TextLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="text-slate-300 hover:text-slate-100">
      {children}
    </Link>
  );
}
