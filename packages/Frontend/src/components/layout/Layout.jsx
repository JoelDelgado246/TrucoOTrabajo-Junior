import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Aquí irá tu Navbar cuando lo crees */}
      <main>
        <Outlet />
      </main>
      {/* Aquí irá tu Footer cuando lo crees */}
    </div>
  );
}
