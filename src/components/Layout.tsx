import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  max-h-screen w-full  bg-background  ">
      <Header>
        <Logo />
      </Header>
      <div className="overflow-y-auto flex justify-center ">
        <main className="box-border max-w-[800px] flex flex-col gap-5 p-2  ">
          {children}
        </main>
      </div>

      <NavBar />
    </div>
  );
}
