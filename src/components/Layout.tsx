import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen max-h-screen bg-background border-2">
      <Header>
        <Logo />
      </Header>

      <main className="overflow-y-auto ">{children}</main>

      <NavBar />
    </div>
  );
}
