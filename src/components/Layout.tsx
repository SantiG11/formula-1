import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";
import { useEffect, useState } from "react";
import MobileNav from "./shared/MobileNav";

export default function Layout() {
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
  }

  const isMobile = useIsMobile();

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-background">
      <Header>
        <Logo />
        {isMobile ? <MobileNav /> : <NavBar />}
      </Header>

      <main className="p-4 overflow-y-auto flex justify-center">
        <div className="w-full max-w-[800px] flex flex-col gap-5 items-center sm:items-stretch ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
