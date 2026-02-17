export type MobileNavLinkProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function MobileNavLink({
  children,
  onClick,
}: MobileNavLinkProps) {
  return (
    <li
      className="hover:bg-accent font-bold px-4 py-2 rounded-xl"
      onClick={onClick}
    >
      {children}
    </li>
  );
}
