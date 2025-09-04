import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isOpen, setIsOpen] = useState(false); // ✅ for mobile toggle
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar flex py-5 justify-between items-center px-5 md:px-10 ">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo w-36" />
      </Link>

      {/* Desktop Menu */}
      <ul className="navbar-menu list-none gap-5 text-[#49557e] hidden text-xl md:flex">
        <li
          onClick={() => setMenu("home")}
          className={`pointer ${menu === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
            document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`pointer ${menu === "menu" ? "active" : ""}`}
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
            document.getElementById("mobile-app")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`pointer ${menu === "mobile-app" ? "active" : ""}`}
        >
          Mobile-app
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
            document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`pointer ${menu === "contact-us" ? "active" : ""}`}
        >
          Contact-us
        </li>
      </ul>

      {/* Right Side (Desktop) */}
      <div className="navbar-right items-center gap-6 hidden md:flex">
        <img src={assets.search_icon} alt="" className="pointer w-6 h-6" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="pointer w-6 h-6" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className="dot absolute min-w-2 min-h-2 bg-red-400 rounded top-[-6px] right-[-4px]" />
          )}
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[#49557e] text-sm px-6 py-2 border border-red-300 rounded-full hover:bg-gray-100 pointer"
        >
          Sign in
        </button>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-[#49557e] pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-5 py-5 text-[#49557e] text-lg">
            <li  onClick={() => setMenu("home")}
          className={`pointer ${menu === "home" ? "active" : ""}`}>Home</li>
            <li
              onClick={() => {
                setIsOpen(false);
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pointer ${menu === "menu" ? "active" : ""}`}
            >
              Menu
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
                document.getElementById("mobile-app")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pointer ${menu === "mobile-app" ? "active" : ""}`}
            >
              Mobile-app
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
                document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pointer ${menu === "contact-us" ? "active" : ""}`}
            >
              Contact-us
            </li>
            <li>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
                className="bg-transparent text-[#49557e] text-sm px-6 py-2 border border-red-300 rounded-full hover:bg-gray-100"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
