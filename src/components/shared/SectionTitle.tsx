import type { LayoutProps } from "@/lib/types";

export default function SectionTitle({ children }: LayoutProps) {
  return <h2 className="text-2xl font-bold ">{children}</h2>;
}
