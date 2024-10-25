// src/components/layout/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#FF9838] py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <Link to="/">
            <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
              <span className="text-gray-400">Logo</span>
            </div>
          </Link>

          {/* Navegación */}
          <nav className="flex gap-16">
            <Link
              to="/comunidad"
              className="font-creepster text-[21px] text-black hover:text-purple-800"
            >
              COMUNIDAD
            </Link>
            <Link
              to="/trucos"
              className={`font-creepster text-[21px] ${
                location.pathname === "/trucos"
                  ? "text-purple-800"
                  : "text-black"
              } hover:text-purple-800`}
            >
              TRUCOS
            </Link>
            <Link
              to="/tratos"
              className="font-creepster text-[21px] text-black hover:text-purple-800"
            >
              TRATOS
            </Link>
          </nav>
        </div>

        {/* Botones de autenticación */}
        <div className="flex items-center gap-4">
          <Link
            to="/registro"
            className="font-creepster text-[21px] text-black rounded-full px-6 py-1 border-2 border-lime-400 hover:bg-lime-400/10"
          >
            REGISTRARSE
          </Link>
          <Link
            to="/login"
            className="font-creepster text-[21px] text-white bg-purple-800 rounded-full px-6 py-1 hover:bg-purple-900"
          >
            INICIAR SESIÓN
          </Link>
        </div>
      </div>
    </header>
  );
}
