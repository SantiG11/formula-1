import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Logo from "./shared/Logo";
import NavBar from "./shared/NavBar";

export default function Layout() {
  return (
    <div className="w-full  bg-background max-w-screen ">
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <div className=" flex justify-center mt-15">
        <main className="box-border max-w-[800px] flex flex-col gap-5 p-2  h-screen ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
