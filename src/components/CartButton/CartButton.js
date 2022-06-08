import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import "./CartButton.css";
// TODO find a better, more general name instead CartButton
const CartButton = ({ add }) => {
  const returnRemove = () => {
    return (
      <button type="submit" className="button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  };
  const returnAdd = () => {
    return (
      <button type="submit" className="button">
        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
      </button>
    );
  };
  return add ? returnAdd() : returnRemove();
};

export default CartButton;
