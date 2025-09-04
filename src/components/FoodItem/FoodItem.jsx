import { useContext } from "react"
import { assets } from "../../assets/frontend_assets/assets"
import { StoreContext } from "../../context/StoreContext"

const FoodItem = ({id, name, price, description,image}) => {

  const{cartItems, addToCart, removeFromCart} = useContext(StoreContext)


  return (
    <div className="food-item w-full m-auto rounded shadow-lg transition duration-300 ease-in hover:transform hover:scale-105">
        <div className="food-item-img-container relative">
            <img className="food-item-image w-full rounded-t-3xl" src={image} alt="" />
            {!cartItems[id]
            ? <img className="add absolute w-[35px] bottom-[15px] right-[15px] pointer rounded-full" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
            : <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1 rounded-full bg-white">
                <img className="w-[30px]" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className="w-[30px]" onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className="food-item-info p-[20px]">
            <div className="food-item-name-rating flex justify-between items-center">
                <p className=" text-lg font-bold">{name}</p>
                <img className="w-[70px]" src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc text-gray-600 text-lg">{description}</p>
            <p className="food-item-price text-red-500 text-xl font-bold">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem 