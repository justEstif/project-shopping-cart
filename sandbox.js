// NOTE ShopPage.js
import { Items } from "../../components/Components";
import "./ShopPage.css";
const ShopPage = ({ handleAddToCart }) => {
  return (
    <div className="shop-page">
      <Items handleAddToCart={handleAddToCart} />
    </div>
  );
};
export default ShopPage;
