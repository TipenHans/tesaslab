import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "./asset/Logo.jpeg";

const Navbar = () => {
  return (
    <div className="bg-navbar">
      <nav className="navbar p-4 shadow-md">
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="text-white text-xl font-bold">
            <img src={Logo} alt="logo" className="w-12 h-12" />
          </Link>
          <div className="space-x-4">
            <Link to="/main" className="text-black hover:text-white">
              Home
            </Link>
            <Link to="/daftar" className="text-black hover:text-white">
              Daftar
            </Link>
            <Link to="/dokumentasi" className="text-black hover:text-white">
              Dokumentasi
            </Link>
            <Link to="/contact" className="text-black hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
