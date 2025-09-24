import type { HeaderProps } from "@/lib/types";

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-background h-15 flex gap-5 items-center fixed top-0 w-full z-10">
      {children}
    </header>
  );
}
