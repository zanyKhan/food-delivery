import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar flex py-5 justify-around items-center h-18">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo w-l" />
      </Link>
      <ul className="navbar-menu list-none gap-5 text-[#49557e] hidden text-xl md:flex">
        <li
          onClick={() => setMenu("home")}
          className={` pointer ${menu === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
            document
              .getElementById("menu")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={` pointer ${menu === "menu" ? "active" : ""}`}
        >
          Menu
        </li>
        <li
          onClick={() => {setMenu("mobile-app");
            document
              .getElementById("mobile-app")
              ?.scrollIntoView({ behavior: "smooth" });

          }}
          className={` pointer ${menu === "mobile-app" ? "active" : ""}`}
        >
          Mobile-app
        </li>
        <li
          onClick={() => {setMenu("contact-us");
             document
              .getElementById("footer")
              ?.scrollIntoView({ behavior: "smooth" });

            
          }}
          className={` pointer ${menu === "contact-us" ? "active" : ""}`}
        >
          Contact-us
        </li>
      </ul>
      <div className="navbar-right items-center gap-10 hidden md:flex">
        <img src={assets.search_icon} alt="" className="pointer" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="pointer" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute min-w-2 min-h-2 bg-red-400 rounded top-[-6px] right-[-4px]"
            }
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[#49557e] text-sm px-6 py-2 border border-red-300 rounded-full hover:bg-gray-100 duration-0 pointer"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
