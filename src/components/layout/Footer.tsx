import { Connect } from "~/components/Connect";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center gap-y-2 pb-5 pt-10 text-slate-500">
      <Connect />
      <div className="flex flex-col items-center text-xs">
        <span>I Live Life Without Social Media. 🤯</span>
        <span>And I dare you to as well.</span>
      </div>
    </footer>
  );
}
