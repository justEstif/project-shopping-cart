import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
const CartPage = () => {
  const [items, setItems] = useState({});
  const handleChange = () => {
    console.log("change made");
  };
  return (
    <div>
      <h1>Hello from CartPage</h1>
      <Cart />
    </div>
  );
};
export default CartPage;
