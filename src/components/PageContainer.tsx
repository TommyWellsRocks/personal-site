export function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col gap-y-24">{children}</main>;
}
