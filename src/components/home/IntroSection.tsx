import { Connect } from "../Connect";

export function IntroSection() {
  return (
    <section className="flex flex-col gap-y-3">
      <span className="text-5xl font-bold text-slate-50">Tommy Wells</span>
      <span className="text-xl text-slate-300">
        A developer that keeps it simple, scalable, and effective.
      </span>
      <div className="flex w-full flex-col items-center gap-y-1 rounded-md bg-slate-700 px-4 py-2 font-light">
        <span>Whatever you do, do it well.</span>
        <span className="text-xs">- Walt Disney</span>
      </div>
      <Connect />
    </section>
  );
}
