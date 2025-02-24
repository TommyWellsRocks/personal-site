import { Connect } from "~/components/layout/Connect";

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 w-full flex flex-col items-center z-50 gap-y-4 p-5 text-slate-500 backdrop-blur-md">
      <Connect />
      <span className="text-xs">© {year} Tommy Wells. All rights reserved.</span>
    </footer>
  );
}
