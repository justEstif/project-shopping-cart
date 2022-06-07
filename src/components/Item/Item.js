import "./Item.css";
import React, { useState } from "react";
import Quantity from "../Quantity/Quantity"
import CartButton from "../CartButton/CartButton"

const Item = (props) => {
  const { name, price, img } = props.item;
  const { handleAddToCart } = props;
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    if (e.target.id === "add") {
      setCount((prevCount) => prevCount + 1);
    } else if (e.target.id === "minus") {
      if (count >= 1) setCount((prevCount) => prevCount - 1);
    }
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count) handleAddToCart({ name, count, price });
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

      <form onSubmit={handleSubmit} className="control-container">
        <Quantity count={count} handleChange={handleChange} handleClick={handleClick} />
        <CartButton add={true} />
      </form>
    </div>
  );
};

export default Item;
