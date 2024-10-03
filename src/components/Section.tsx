export function Section({
  children,
  refId,
}: {
  children: React.ReactNode;
  refId?: string;
}) {
  return (
    <section id={refId} className="flex scroll-mt-[100px] flex-col gap-y-8">
      {children}
    </section>
  );
}
