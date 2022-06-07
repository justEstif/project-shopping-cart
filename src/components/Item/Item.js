import "./Item.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";

const Item = (props) => {
  const { name, price, img } = props.item;
  const { handleAddToCart } = props;
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!count) return;
    else handleAddToCart({ name, count, price });
  };

  return (
    <div className="item-container">
      <div className="item-price-name-container">
        <div className="item-title-container">{name}</div>
        <div className="item-price-container">${price}</div>
      </div>

      <div className="item-img-container">
        <img className="item-img" src={img} alt={name} />
      </div>

      <div>
        <form onSubmit={handleSubmit} className="item-control-container">
          <div className="item-quantity-container">
            <button
              type="button"
              onClick={() => {
                if (count >= 1) setCount((prevCount) => prevCount - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              value={count}
              onChange={handleChange}
            ></input>
            <button
              type="button"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              +
            </button>
          </div>
          <div className="item-button-container">
            <button type="submit" className="item-button">
              <FontAwesomeIcon icon={faShoppingCart} />
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Item;
