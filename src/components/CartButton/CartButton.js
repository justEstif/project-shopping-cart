import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/fontawesome-free-solid";
const CartButton = ({ add }) => {
  const returnRemove = () => {
    return (
      <div className="button-container">
        <button type="submit" className="button">
          <FontAwesomeIcon icon={faTrash} />
          Add to Cart
        </button>
      </div>
    );
  };
  const returnAdd = () => {
    return (
      <div className="button-container">
        <button type="submit" className="button">
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to Cart
        </button>
      </div>
    );
  };

  return add ? returnAdd() : returnRemove();
};

export default CartButton;
