import React from "react";
import CartItem from "../CartItem/CartItem";
const Cart = ({ items, handleRemoveFromCart }) => {
  const total = items.reduce((acc, item) => acc + (item.count + item.price), 0);
  const handleClick = () => {
    console.log("clicked");
  };
  const handleChange = () => {
    console.log("changed");
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  // Count: {item.count}
  return (
    <div>
      <div>In cart</div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
        </React.Fragment>
      ))}
      <div>Total Price: {total}</div>
    </div>
  );
};

export default Cart;
