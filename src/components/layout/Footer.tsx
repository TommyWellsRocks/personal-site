import { Connect } from "~/components/layout/Connect";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-y-2 py-5 text-slate-500 backdrop-blur-md">
      <Connect />
      <div className="flex flex-col items-center text-xs">
        <span>I Live Life Without Social Media. 🤯</span>
        <span>And I dare you to as well.</span>
      </div>
    </footer>
  );
}
