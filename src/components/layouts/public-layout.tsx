import { Outlet } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";

const PublicLayout = () => {
  return (
    <section className="flex flex-col h-dvh w-full justify-center items-center">
      <header className="flex justify-end w-full h-10 p-3 ">
        <ModeToggle />
      </header>
      <main className="flex justify-center items-center h-[calc(100dvh-8rem)]">
        <Outlet />
      </main>
      <footer className="flex justify-center w-full h-25 p-3"></footer>
    </section>
  );
};

export default PublicLayout;
