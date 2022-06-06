import Items from "../../components/Items/Items";
import "./ShopPage.css"
const ShopPage = (props) => {
  const { handleClick } = props
  return (
    <div className="shop-page">
      <Items handleClick={handleClick} />
    </div>
  );
};
export default ShopPage;

// <Item name="some name" quantity=5 picture={} price = {} />
