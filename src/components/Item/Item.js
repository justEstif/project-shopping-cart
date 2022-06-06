import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";

const Item = (props) => {
  const { name, price, img } = props.item;
  const { handleClick } = props;

  const passClick = (event) => {
    console.log(event.target);
    handleClick();
  };
  return (
    <div className="item-container">
      <div className="item-title-container">
        <p>{name}</p>
      </div>
      <div className="item-img-container">
        <img className="item-img" src={img} alt={name} />
      </div>
      <div className="item-price-button-container">
        <div className="item-price-container">${price}</div>
        <div className="item-button-container">
          <button className="item-button" onClick={(e) => passClick(e)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
