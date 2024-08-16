import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const HandleRemove = (itemsid) => {
    dispatch(remove(itemsid));
  };
  return (
    <div>
      <h3>Cart</h3>

      <div className="cartWrapper">
        {items.map((items) => (
          <div className="cartCard">
            <img src={items.image} alt="" />
            <h5>{items.title}</h5>
            <h5>{items.price}</h5>
            <button onClick={() => HandleRemove(items.id)} className="btn">
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
