import Quantity from "../Quantity/Quantity";
import CartButton from "../CartButton/CartButton";
import "./CartItem.css"
const CartItem = ({ item, handleRemoveFromCart }) => {
  const { name, count, price } = item;
  const handleClick = () => { };
  const handleChange = (e) => {
    console.log("change");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRemoveFromCart(name);
  };
  return (
    <div className="cart-item">
      <div>{name}</div>
      <form onSubmit={handleSubmit} className="control-container">
        <Quantity
          count={count}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <CartButton add={false} />
      </form>
      <div>{price * count}</div>
    </div>
  );
};

export default CartItem;
