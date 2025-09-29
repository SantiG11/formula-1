export type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-2xl font-bold ">{children}</h2>;
}
