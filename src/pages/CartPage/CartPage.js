import Cart from "../../components/Cart/Cart";
const CartPage = ({ items, handleRemoveFromCart }) => {
  return (
    <div>
      <Cart items={items} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};
export default CartPage;
