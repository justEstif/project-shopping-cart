import "./Cart.css";
import React from "react";
// import CartItem from "../CartItem/CartItem";
import { CartItem } from "../Components";
const Cart = ({ items, handleRemoveFromCart, handleCheckout }) => {
  // find the total of the item
  // what if we just pass the total of the item and this simply adds them all up?
  // TODO Item and CartItem should have  Total = price * quantity
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);
  // TODO figure out a better name instead of handlePreCheckout
  const handlePreCheckout = () => (items.length > 0 ? handleCheckout() : null);
  const returnItems = (items) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
      </React.Fragment>
    ));
  };
  return (
    <div className="cart-container">
      <div className="cart-items">{returnItems(items)}</div>
      <div>Total Price: {total}</div>
      <button onClick={handlePreCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
