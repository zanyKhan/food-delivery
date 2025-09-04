import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display mx-18 mt-[30px]" id="food-display">
        <h2 className="font-semibold text-3xl">Top dishes near you</h2>
        <div className="food-display-list grid my-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]  ">
            {food_list.map((item)=>{
              if (category === "All" || category === item.category) {
                 return <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }   
            })}
        </div>
    </div>
  )
}

export default FoodDisplay  