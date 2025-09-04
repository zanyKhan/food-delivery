import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div
      className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center px-6 md:px-12 lg:px-24 py-8"
      id="footer"
    >
      {/* Footer Content */}
      <div
        className="footer-content w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-[80px] mt-[30px]"
      >
        {/* Left */}
        <div className="footer-content-left flex flex-col items-start gap-5">
          <img src={assets.logo} alt="logo" className="w-32 md:w-40" />
          <p className="text-sm leading-relaxed md:text-base">
            Welcome to our website! We are dedicated to providing the best services and
            products to our valued customers. Our mission is to deliver quality,
            reliability, and innovation in everything we do. From the very beginning, we
            have focused on building trust and long-lasting relationships with our users.
            Stay connected with us through our social platforms for the latest updates,
            offers, and news. Thank you for choosing us and being a part of our journey.
          </p>
          <div className="footer-social-icons flex mt-3">
            <img className="w-[35px] md:w-[40px] mr-4" src={assets.facebook_icon} alt="facebook" />
            <img className="w-[35px] md:w-[40px] mr-4" src={assets.twitter_icon} alt="twitter" />
            <img className="w-[35px] md:w-[40px]" src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        {/* Center */}
        <div className="footer-content-center flex flex-col items-start gap-4">
          <h2 className="font-bold text-xl md:text-2xl text-white">COMPANY</h2>
          <ul className="text-sm md:text-base">
            <li className="mb-2 pointer">Home</li>
            <li className="mb-2 pointer">About us</li>
            <li className="mb-2 pointer">Delivery</li>
            <li className="mb-2 pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-content-right flex flex-col items-start gap-4">
          <h2 className="font-bold text-xl md:text-2xl text-white">GET IN TOUCH</h2>
          <ul className="text-sm md:text-base">
            <li className="mb-2 pointer">+1-212-456-7890</li>
            <li className="mb-2 pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <hr className="w-full h-[1px] my-6 bg-gray-500 border-none" />
      <p className="text-xs md:text-sm text-center">
        Copyright 2025 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
