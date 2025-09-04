import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup absolute z-50 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded text-xl transition duration-300 ease-in">
        <div className="login-popup-title flex items-center justify-between text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] pointer"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border-2 border-[#c9c9c9] p-1 rounded text-md"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="outline-none border-2 border-[#c9c9c9] p-1 rounded text-md"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="outline-none border-2 border-[#c9c9c9] p-1 rounded text-md"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="border-none p-1 rounded text-white bg-red-400 text-lg pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
          <input type="checkbox" required className="mt-[6px]" />
          <p className="text-sm">
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>
        {currState === "Login" ? (
          <p className="text-sm">
            Create a new account ?{" "}
            <span
              className="font-bold text-red-400 text-sm pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>{" "}
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="font-bold text-red-400 text-sm pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
