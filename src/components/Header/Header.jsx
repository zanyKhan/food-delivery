const Header = () => {
  return (
        <div className="Header h-[34vw] mx-[70px] my-6 bg-[url('/images/header_img.png')] bg-cover bg-center relative rounded-xl flex items-center">
            
            {/* Overlay (optional for better text visibility) */}
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            {/* Content inside image */}
            <div className="relative z-4 text-white max-w-[600px] px-6 md:px-12 lg:ml-20">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Order your favourite food here
              </h2>
              <p className="mb-6 text-sm md:text-base lg:text-lg">
                Our food delivery app makes it easy to order from your favorite
                restaurants, with fast delivery, secure payments, and fresh meals
                anytime, anywhere.
              </p>
              <button className="bg-gray-200 text-black hover:bg-red-200 px-3 py-1 md:px-6 md:py-3 rounded-full font-medium transition pointer">
                View Menu
              </button>
            </div>
          </div>
        )
}

export default Header   