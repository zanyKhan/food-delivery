import { menu_list } from "../../assets/frontend_assets/assets"

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-4 px-4 md:px-10 lg:px-18" id="menu">
      {/* Heading */}
      <h1 className="text-[#262626] font-bold text-2xl md:text-3xl">
        Explore our menu
      </h1>

      {/* Sub Text */}
      <p className="explore-menu-text text-sm md:text-lg text-gray-700 max-w-full md:max-w-[70%]">
        Discover a variety of delicious dishes crafted to satisfy every craving —
        from quick bites to full meals, our menu has something for everyone.
      </p>

      {/* Scrollable Menu List */}
      <div
        className="explore-menu-list flex gap-5 md:gap-8 text-center overflow-x-auto scrollbar-hide py-3"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item flex flex-col items-center min-w-[80px] md:min-w-[120px]"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`${
                  category === item.menu_name
                    ? "border-red-400 border-solid border-2 p-1"
                    : ""
                } w-16 h-16 md:w-24 md:h-24 rounded-full object-cover cursor-pointer transition duration-300`}
              />
              <p className="mt-2 text-sm md:text-lg text-gray-900 cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          )
        })}
      </div>

      {/* Divider */}
      <hr className="w-full h-[2px] bg-[#e2e2e2] border-none mt-3" />
    </div>
  )
}

export default ExploreMenu
