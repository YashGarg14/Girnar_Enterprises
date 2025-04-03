import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let dropdownTimer;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  return (
    <div>
    <nav className="bg-white p-4 shadow-md relative bg-blue-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Left Side: Logo & Company Info */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="md:w-32 md:h-14 w-24 h-10"
            />
          </Link>
          <div>
            <h1 className="text-lg font-bold tracking-wide">
              Girnar Enterprises
            </h1>
            <p className="text-sm text-gray-600 tracking-wide">Ghaziabad, UP</p>
            <p className="text-sm font-semibold tracking-wide">
              GST No.{" "}
              <span className="font-bold text-green-600">09AENPJ4407P3ZV</span>
            </p>
            <p className="hidden md:flex text-sm font-semibold tracking-wide items-center">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                ✔
              </span>
              <span className="ml-2">Verified plus supplier - IndiaMart</span>
            </p>
          </div>
        </div>

        {/* Center Navigation (Desktop) */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide"
          >
            Company Brief
          </Link>

          {/* Dropdown for Products */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/products"
              className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide flex items-center"
            >
              Our Products <IoIosArrowDown className="ml-1" />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-40 z-50">
                <Link
                  to="/product/usa-steam-coal"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  USA Steam Coal
                </Link>
                <Link
                  to="/product/indonesian-coal-1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Indonesian Coal - High GCV
                </Link>
                <Link
                  to="/product/indonesian-coal-2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Indonesian Coal - Medium GCV
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side: Call & Email (Desktop) */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="tel:++919927956481"
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Call Us: <span className="font-bold">+91 9927956481</span>
          </a>
          <a
            href="mailto:girnarenterprises@gmail.com"
            className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Send Email
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - Appears Below Navbar & Overlaps Content */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4 flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="py-3 text-gray-700 font-semibold hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-3 text-gray-700 font-semibold hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Company Brief
          </Link>

          {/* Dropdown for Products (Mobile) */}
          <div className="relative w-full text-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="py-3 text-gray-700 font-semibold hover:text-blue-600 flex justify-center w-full"
            >
              Our Products <IoIosArrowDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="bg-white shadow-md w-full text-center">
                <Link
                  to="/product/usa-steam-coal"
                  className="block py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  USA Steam Coal - High GCV
                </Link>
                <Link
                  to="/product/indonesian-coal-1"
                  className="block py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Indonesian Coal - High GCV
                </Link>
                <Link
                  to="/product/indonesian-coal-2"
                  className="block py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Indonesian Coal - Meduim GCV
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="py-3 text-gray-700 font-semibold hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
      
    </nav>
    <p className="flex text-sm font-semibold tracking-wide items-center mt-2 ml-4 md:hidden">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
      ✔
    </span>
    <span className="ml-2">Verified plus supplier - IndiaMart</span>
  </p>
  </div>
  );
};

export default Navbar;
