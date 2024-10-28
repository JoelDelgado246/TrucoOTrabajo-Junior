import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import pumpkinLogo from "../../imgs/pumpkinLogo.png";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-customOrange">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <Link to="/">
            <img
              src={pumpkinLogo}
              alt="Logo de calabaza"
              className="w-20 h-20"
            />
          </Link>

          <nav className="flex gap-16">
            <Link
              to="/comunidad"
              className="font-creepster text-[21px] text-black hover:text-customPurple"
            >
              COMUNIDAD
            </Link>
            <Link
              to="/trucos"
              className={`font-creepster text-[21px] ${
                location.pathname === "/trucos"
                  ? "text-customPurple"
                  : "text-black"
              } hover:text-customPurple`}
            >
              TRUCOS
            </Link>
            <Link
              to="/tratos"
              className={`font-creepster text-[21px] ${
                location.pathname === "/tratos"
                  ? "text-customPurple"
                  : "text-black"
              } hover:text-customPurple`}
            >
              TRATOS
            </Link>
            <Link
              to="/solve-trick"
              className="font-creepster text-[21px] text-black hover:text-customPurple"
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
