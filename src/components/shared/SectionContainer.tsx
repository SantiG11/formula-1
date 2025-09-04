import type { LayoutProps } from "@/lib/types";

export default function SectionContainer({ children }: LayoutProps) {
  return <section className="flex flex-col gap-3 p-2 ">{children}</section>;
}
