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
    <div className="bg-white border-b border-gray-300">
      <nav className="bg-[#00467f] md:bg-white p-2 md:p-4 shadow-md relative rounded-bl-[45%] rounded-br-[45%] md:rounded-none">
        <div className="container mx-6 md:mx-auto flex justify-between items-center flex-wrap w-auto">
          {/* Left Side: Logo & Company Info */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="md:w-32 md:h-14 w-20 h-8"
              />
            </Link>
            <div>
              <h1 className="text-lg text-white md:text-black text-lg font-bold tracking-wide">
                Girnar Enterprises
              </h1>
              <p className="text-sm text-white md:text-gray-600 tracking-wide">Ghaziabad, UP</p>
              <p className="text-sm text-white md:text-black font-semibold tracking-wide">
                GST No.{" "}
                <span className="font-bold text-white md:text-green-600">09AENPJ4407P3ZV</span>
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
            className={`lg:hidden text-2xl ml-auto ${
              menuOpen ? "text-white" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full z-50 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } bg-white`}
        >
          <div className="p-4 flex flex-col items-center space-y-4 text-gray-700">
            <Link
              to="/"
              className="py-3 font-semibold hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 font-semibold hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Company Brief
            </Link>

            {/* Dropdown for Products (Mobile) */}
            <div className="relative w-full text-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="py-3 font-semibold hover:text-blue-600 flex justify-center w-full"
              >
                Our Products <IoIosArrowDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="bg-white w-full text-center shadow-md rounded-md">
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
                    Indonesian Coal - Medium GCV
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="py-3 font-semibold hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <p className="md:hidden flex text-sm font-semibold tracking-wide items-center justify-center p-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                  ✔
                </span>
                <span className="ml-2">Verified plus supplier - IndiaMart</span>
              </p>
    </div>
  );
};

export default Navbar;
