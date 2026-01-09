import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-lg">
          Admin<span className="text-blue-500">Go</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">
            Trang chủ
          </Link>
          <Link to="/login" className="hover:text-white">
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Đăng ký
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-300">
            <Link to="/" onClick={() => setOpen(false)}>
              Trang chủ
            </Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              Đăng nhập
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="text-blue-500 font-semibold"
            >
              Đăng ký
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
