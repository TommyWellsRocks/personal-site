import { Connect } from "~/components/layout/Connect";

export function Footer() {
  return (
    <footer className="fixed bottom-2 right-2 z-50 flex flex-col items-center gap-y-2 p-5 text-slate-500 backdrop-blur-md">
      <Connect />
    </footer>
  );
}
