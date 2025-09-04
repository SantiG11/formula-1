import type { LayoutProps } from "@/lib/types";

export default function TableContainer({ children }: LayoutProps) {
  return (
    <div className="border rounded-xl overflow-hidden w-full ">{children}</div>
  );
}
