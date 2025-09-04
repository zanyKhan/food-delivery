import { menu_list } from "../../assets/frontend_assets/assets"

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu flex flex-col gap-3 mx-18" id="menu">
        <h1 className="text-[#262626] font-bold text-3xl">Explore our menu</h1>
        <p className="explore-menu-text max-w-[60%] text-lg text-gray-700">Discover a variety of delicious dishes crafted to satisfy every craving — from quick bites to full meals, our menu has something for everyone.</p>
        <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center mx-2 overflow-x-hidden">
            {menu_list.map((item, index)=>{
                return(
                    <div className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img src={item.menu_image} alt="" className={` ${ category === item.menu_name ? " border-red-400 border-solid p-1 border-2 ":""} w-28 min-w-24 pointer rounded-full transition duration-500 ease-out`} />
                        <p className="mt-[10px] text-lg text-gray-900 pointer">{item.menu_name}</p>
                    </div>
                )

            })}
        </div>
        <hr className="mx-3 h-1 bg-[#e2e2e2] border-none" />
    </div>
  )
}

export default ExploreMenu  