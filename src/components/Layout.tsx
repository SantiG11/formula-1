import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  max-h-screen bg-background  border-2 gap-2  ">
      <Header>
        <Logo />
      </Header>
      <div className="overflow-y-auto flex justify-center">
        <aside></aside>
        <main className="max-w-[800px] flex flex-col gap-5 ">{children}</main>
        <aside></aside>
      </div>

      <NavBar />
    </div>
  );
}
