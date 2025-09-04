import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div
      className="food-display px-4 sm:px-6 md:px-10 lg:px-18 mt-6 md:mt-8 lg:mt-[30px]"
      id="food-display"
    >
      {/* Heading */}
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">
        Top dishes near you
      </h2>

      {/* Grid */}
      <div
        className="food-display-list grid my-6 md:my-[30px] gap-5 sm:gap-6 md:gap-8 lg:gap-[30px] 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
