import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart mx-[80px] my-[100px]">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-lg">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="text-gray-400 h-[1px] bg-[#e2e2e2] border-none" />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item my-[10px] mx-0 text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-lg">
                  <img src={item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="text-gray-400 h-[1px] bg-[#e2e2e2] border-none" />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-15">
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
          <button
            className="border-none text-white bg-red-400 w-[max(15vw,200px)] py-[10px] px-[5px] rounded pointer"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                type="text"
                placeholder="promo code"
                className=" bg-transparent border-none outline-none pl-[10px]"
              />
              <button className="w-[max(10vw, 150px)] px-[12px] py-[5px] bg-black text-white rounded border-none pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
