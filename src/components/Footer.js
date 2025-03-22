import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">Girnar Enterprises</h2>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 ">
              <IoIosPin className="text-lg text-blue-400" />
              B-5, Roopnagar Ind. Area, Loni, Ghaziabad, Uttar Pradesh, India
            </p>
            <p className="flex items-center gap-2">
              <IoIosCall className="text-lg text-green-400" />
              <span className="font-bold">+91 99279 56481</span>
            </p>
            <p className="flex items-center gap-2">
              <IoIosMail className="text-lg text-red-400" />
              girnarenterprises@gmail.com
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="sms:+919876543210"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              Send SMS
            </a>
            <a
              href="mailto:girnarenterprises@gmail.com"
              className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800 flex items-center gap-2"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold">Company Profile</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                {" "}
                Company Brief
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-400">
                {" "}
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                {" "}
                Contact Us{" "}
              </Link>
            </li>
          </ul>
        </div>

        {/* Products & Services */}
        <div>
          <h2 className="text-xl font-semibold">Products & Services</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-gray-400">
              <Link to="/product/usa-steam-coal">
                USA Steam Coal - High GCV
              </Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/product/indonesian-coal-1">
                Indonesian Coal - High GCV
              </Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/product/indonesian-coal-2">
                Indonesian Coal - Medium GCV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-10">
        <p>Follow us</p>
        <div className="flex justify-center mt-2 gap-4">
          <a
            href="https://www.facebook.com/"
            className="text-blue-400 text-lg hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.x.com/"
            className="text-blue-300 text-lg hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-blue-500 text-lg hover:text-blue-600"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
