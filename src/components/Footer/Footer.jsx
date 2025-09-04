import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center px-24 py-8" id="footer">
        <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] mt-[30px]">
            <div className="footer-content-left flex flex-col items-start gap-[20px]">
                <img src={assets.logo} alt="" />
                <p>Welcome to our website! We are dedicated to providing the best services and
                    products to our valued customers. Our mission is to deliver quality,
                    reliability, and innovation in everything we do. From the very beginning, we
                    have focused on building trust and long-lasting relationships with our users.Stay
                    connected with us through our social platforms for the latest updates,
                    offers, and news. Thank you for choosing us and being a part of our journey.</p>
                <div className="footer-social-icons flex ">
                    <img className="w-[40px] mr-[15px]" src={assets.facebook_icon} alt="" />
                    <img className="w-[40px] mr-[15px]" src={assets.twitter_icon} alt="" />
                    <img className="w-[40px] mr-[15px]" src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-[20px]">
                <h2 className="font-bold text-2xl text-white" >COMPANY</h2>
                <ul >
                    <li className="mb-2 pointer">Home</li>
                    <li className="mb-2 pointer">About us</li>
                    <li className="mb-2 pointer">Delivery</li>
                    <li className="mb-2 pointer">Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right flex flex-col items-start gap-[20px]">
                <h2 className="font-bold text-white text-2xl" >GET IN TOUCH</h2>
                <ul>
                    <li className="mb-2 pointer">+1-212-456-7890</li>
                    <li className="mb-2 pointer">contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className="w-full h-[2px] my-[20px] mx-0 bg-gray-500 border-none" />
        <p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer   