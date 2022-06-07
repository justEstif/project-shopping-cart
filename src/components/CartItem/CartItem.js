const CartItem = ({ item, handleRemoveFromCart }) => {
  const { name, count, price } = item;
  const handleClick = () => {
    handleRemoveFromCart(name)
  }
  return (
    <div>
      <div>Name: {name}</div>
      <div>Count: {count}</div>
      <div>Price: {price}</div>
      <button onClick={handleClick}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
