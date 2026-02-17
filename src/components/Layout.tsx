import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

import MobileNav from "./shared/MobileNav";
import useIsMobile from "@/hooks/useIsMobile";

export default function Layout() {
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-background">
      <Header>
        <Logo />
        {isMobile ? <MobileNav /> : <NavBar />}
      </Header>

      <main className="p-4 overflow-y-auto flex justify-center">
        <div className="w-full max-w-[800px] flex flex-col gap-5  items-stretch ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
