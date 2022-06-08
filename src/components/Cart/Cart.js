import "./Cart.css";
import React from "react";
import CartItem from "../CartItem/CartItem";
const Cart = ({ items, handleRemoveFromCart, handleCheckout }) => {
  // FIXED BUG when the count is equal to 0, the total becomes messed up
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);
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
