function ToolItem({ tool }: { tool: string }) {
  return <span className="rounded-full bg-slate-700 px-3 py-1">{tool}</span>;
}

export function ToolList({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {tools.map((tool) => (
        <ToolItem tool={tool} />
      ))}
    </div>
  );
}
