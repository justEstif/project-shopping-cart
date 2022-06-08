import "./CartItem.css";
import { CartButton } from "../Components";
const CartItem = ({ item, handleRemoveFromCart }) => {
  const { name, count, price } = item;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRemoveFromCart(name);
  };
  return (
    <div className="cart-item">
      <div className="name"><form onSubmit={handleSubmit} className="control-container">
        <CartButton add={false} />
      </form>
        {count} x {name}
      </div>
      <div> ${price * count}</div>
    </div>
  );
};

export default CartItem;
