export function ToolList({ tools }: { tools?: string[] }) {
  if (tools)
    return (
      <div className="flex flex-wrap gap-2 text-xs">
        {tools.map((tool, index) => (
          <span className="rounded-full bg-slate-700 px-3 py-1" key={index}>
            {tool}
          </span>
        ))}
      </div>
    );
}
