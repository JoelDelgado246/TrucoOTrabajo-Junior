import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-customOrange">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <Link to="/">
            <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
              <span className="text-gray-400">Logo</span>
            </div>
          </Link>

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
            <Link
              to="/solve-trick"
              className="font-creepster text-[21px] text-black hover:text-purple-800"
            >
              Truco resuelto
            </Link>
          </nav>
        </div>

        {/* Dependiendo del estado */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <Link to="/perfil">
              <FaUserCircle className="text-black text-4xl" />
            </Link>
          ) : (
            <>
              <Link
                to="/registro"
                className="font-creepster text-[21px] text-black rounded-full px-6 py-1 border-2 border-customGreen hover:bg-customGreen"
              >
                REGISTRARSE
              </Link>
              <Link
                to="/login"
                className="font-creepster text-[21px] text-white bg-customPurple rounded-full px-6 py-1 hover:bg-purple-950"
              >
                INICIAR SESIÓN
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
