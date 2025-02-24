import { Connect } from "~/components/layout/Connect";

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center gap-y-4 p-5 text-slate-500 backdrop-blur-md">
      <Connect />
      <span className="text-xs">© {year} Tommy Wells. All rights reserved.</span>
    </footer>
  );
}
