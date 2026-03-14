export type SectionContainerProps = {
  children: React.ReactNode;
  classes?: string;
};

export default function SectionContainer({
  children,
  classes,
}: SectionContainerProps) {
  return (
    <section className={`flex flex-col gap-2 pb-4 ${classes}`}>
      {children}
    </section>
  );
}
