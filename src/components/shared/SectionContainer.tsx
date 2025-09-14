import type { LayoutProps } from "@/lib/types";

export default function SectionContainer({ children, classes }: LayoutProps) {
  return (
    <section className={`flex flex-col gap-3 ${classes}`}>{children}</section>
  );
}
