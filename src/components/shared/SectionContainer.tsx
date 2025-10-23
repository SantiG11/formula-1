export type SectionContainerProps = {
  children: React.ReactNode;
  classes?: string;
};

export default function SectionContainer({
  children,
  classes,
}: SectionContainerProps) {
  return (
    <section className={`flex flex-col gap-4  ${classes}`}>{children}</section>
  );
}
