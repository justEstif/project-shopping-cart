import "./Item.css";
import React, { useState } from "react";
// import Quantity from "../Quantity/Quantity";
// import CartButton from "../CartButton/CartButton";

import { Quantity, CartButton } from "../Components";
const Item = ({ item, handleAddToCart }) => {
  const { name, price, img } = item;
  const [count, setCount] = useState(1);

  // TODO find some non gimiicky way to handleClick for the Item
  const handleClick = (e) => {
    if (e.target.id === "add") {
      setCount((prevCount) => prevCount + 1);
    } else if (e.target.id === "minus") {
      if (count >= 1) setCount((prevCount) => prevCount - 1);
    }
  };
  // TODO moved the handleChange to the App so that it can be Shared with the CartItem
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  // TODO make handleSubmit in App with both handleRemoveToCart and handleAddToCart
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count) handleAddToCart({ name, count, price });
    setCount(1);
  };

  return (
    <div className="container">
      <div className="price-name-container">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>

      <div className="img-container">
        <img className="img" src={img} alt={name} />
      </div>

      {/* TODO instead of have Quantity and CartButton, maybe just a Form component would be better*/}
      <form onSubmit={handleSubmit} className="control-container">
        <Quantity
          count={count}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <CartButton add={true} />
      </form>
    </div>
  );
};

export default Item;
