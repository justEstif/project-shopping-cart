import { Link } from "react-router-dom";
import { icons } from "../../assets/img/index"

// we can also add the number of items here as a prop
const CartTab = () => {
  return (
    <Link to={"cart"} className="headerlink-title">
      <img src={icons.cartIcon} alt="cart icon here" />
      Cart
    </Link>
  );
};

export default CartTab;
