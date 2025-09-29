import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-background">
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <main className="p-4 overflow-y-auto flex justify-center">
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
