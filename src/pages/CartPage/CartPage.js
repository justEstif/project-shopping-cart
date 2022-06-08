import Cart from "../../components/Cart/Cart";
const CartPage = ({ items, handleRemoveFromCart, handleCheckout }) => {
  return (
    <div className="cart">
      <Cart
        items={items}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};
export default CartPage;
