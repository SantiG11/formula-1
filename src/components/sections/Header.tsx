export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-background h-15 flex gap-5 items-center border-b justify-between md:justify-start">
      {children}
    </header>
  );
}
