import { CartItem } from "../../components/Components";
import "./CartPage.css"
import React from "react";

const CartPage = ({ items, handleRemoveFromCart, handleCheckout }) => {
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
      <div className="cart">{returnItems(items)}</div>
      <div>Total Price: {total}</div>
      <button onClick={handlePreCheckout}>Checkout</button>
    </div>
  );
};
export default CartPage;
