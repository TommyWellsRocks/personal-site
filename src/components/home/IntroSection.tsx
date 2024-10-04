import { Connect } from "../Connect";

export function IntroSection() {
  return (
    <section className="flex flex-col gap-y-2 sm:gap-y-3">
      <span className="text-4xl sm:text-5xl font-bold text-slate-50">Tommy Wells</span>
      <span className="sm:text-xl text-slate-300">
        A developer that keeps it simple, scalable, and effective.
      </span>
      <div className="text-sm sm:text-base flex w-full flex-col items-center gap-y-1 rounded-md bg-slate-700 px-2 py-1 sm:px-4 sm:py-2 font-light">
        <span>Whatever you do, do it well.</span>
        <span className="text-xs">- Walt Disney</span>
      </div>
      <Connect />
    </section>
  );
}
