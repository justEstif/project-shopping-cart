import React from "react";
import CartItem from "../CartItem/CartItem";
const Cart = ({ items, handleRemoveFromCart, handleCheckout }) => {
  const total = items.reduce((acc, item) => acc + (item.count + item.price), 0);
  const handlePreCheckout = () => {
    if (items.length <= 0) return
    else handleCheckout()
  }
  return (
    <div>
      <div>In cart</div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
        </React.Fragment>
      ))}
      <div>Total Price: {total}</div>
      <button onClick={handlePreCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
