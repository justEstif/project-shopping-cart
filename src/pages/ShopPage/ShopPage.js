import Items from "../../components/Items/Items";
import "./ShopPage.css";
const ShopPage = ({ handleAddToCart }) => {
  return (
    <div className="shop-page">
      <Items handleAddToCart={handleAddToCart} />
    </div>
  );
};
export default ShopPage;

