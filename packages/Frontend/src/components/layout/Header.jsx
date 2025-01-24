import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import pumpkinLogo from "../../imgs/pumpkinLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-customOrange relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={pumpkinLogo} alt="Logo de calabaza" className="w-16 h-16" />
        </Link>

        <button onClick={toggleMenu} className="text-black text-3xl lg:hidden">
          <FaBars />
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-customPurple text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <button
            onClick={toggleMenu}
            className="text-white text-3xl absolute top-4 right-4"
          >
            <FaTimes />
          </button>

          <nav className="flex flex-col items-start p-8 space-y-4">
            <Link
              to="/trucos"
              className="text-2xl font-creepster hover:text-customOrange transition-colors duration-200"
              onClick={toggleMenu}
            >
              TRUCOS
            </Link>
            <Link
              to="/tratos"
              className="text-2xl font-creepster hover:text-customOrange transition-colors duration-200"
              onClick={toggleMenu}
            >
              TRATOS
            </Link>
            <Link
              to="/solve-trick"
              className="text-2xl font-creepster hover:text-customOrange transition-colors duration-200"
              onClick={toggleMenu}
            >
              Truco Resuelto
            </Link>
          </nav>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-16 text-center lg:text-left">
          <Link
            to="/"
            className="font-creepster text-[21px] text-black hover:text-customPurple transition-colors duration-200"
          >
            INICIO
          </Link>
          <Link
            to="/trucos"
            className="font-creepster text-[21px] text-black hover:text-customPurple transition-colors duration-200"
          >
            TRUCOS
          </Link>
          <Link
            to="/tratos"
            className="font-creepster text-[21px] text-black hover:text-customPurple transition-colors duration-200"
          >
            TRATOS
          </Link>
        </nav>

        <div className="hidden lg:flex items-center">
          <Link to="/">
            <FaUserCircle className="text-black text-4xl" />
          </Link>
        </div>

        {menuOpen && (
          <div className="flex lg:hidden items-center justify-center mt-4"></div>
        )}
      </div>
    </header>
  );
}
