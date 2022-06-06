import Cart from "../../components/Cart/Cart";
const CartPage = ({ items }) => {
  return (
    <div>
      <Cart items={items} />
    </div>
  );
};
export default CartPage;
