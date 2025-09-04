const Header = () => {
  return (
    <div
      className="Header relative flex items-center 
      h-[30vh] sm:h-[40vh] md:h-[34vw] 
      mx-3 sm:mx-6 md:mx-10 lg:mx-[70px] 
      my-3 sm:my-4 md:my-6 
      bg-[url('/images/header_img.png')] bg-cover bg-center rounded-lg sm:rounded-xl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-lg sm:rounded-xl"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-full md:max-w-[600px] px-3 sm:px-6 md:px-8 lg:ml-20">
        <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
          Order your favourite food here
        </h2>
        <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Our food delivery app makes it easy to order from your favorite
          restaurants, with fast delivery, secure payments, and fresh meals
          anytime, anywhere.
        </p>
        <button className="bg-gray-200 text-black hover:bg-red-200 
          px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 
          rounded-full font-medium transition pointer 
          text-xs sm:text-sm md:text-base">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
