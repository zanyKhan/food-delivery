import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <form className="place-order mx-[100px] my-[50px] flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-full max-w-[max(30%, 500px)]">
        <p className="title font-bold text-2xl mb-[50px]">Delivery Information</p>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="First name"  className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
          <input type="text" placeholder="Last name" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
        </div>
        <input type="email" placeholder="Email address" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
        <input type="text" placeholder="Street" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="City"  className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
          <input type="text" placeholder="State" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="Zip Code"  className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
          <input type="text" placeholder="Country" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>
        </div>
        <input type="text" placeholder="Phone" className="mb-[15px] w-[100%] p-2 border-2 border-[#c5c5c5] rounded outline-red-400"/>

      </div>
      <div className="place-order-right w-full max-w-[max(40%, 500px)]">
        <div className="cart-totals flex-1 flex flex-col gap-12">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0 text-gray-400" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="my-[10px] mx-0 text-gray-400" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p className="font-bold">Total</p>
              <p className="font-bold">${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className="border-none text-white bg-red-400 w-[max(15vw,200px)] py-[10px] px-[5px] rounded pointer mt-[30px]" >PROCEED TO PAYMENT</button>
        </div>  

      </div>
    </form>
  )
}

export default PlaceOrder   