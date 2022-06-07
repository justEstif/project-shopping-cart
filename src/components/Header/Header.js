import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import "./Header.css";

const Header = ({ clickCount }) => {
  return (
    <div className="header">
      <div className="link">
        <Link to={""}>Shop</Link>
      </div>

      <div className="link">
        <Link to={"cart"}>
          <FontAwesomeIcon icon={faShoppingCart} />  {clickCount}
        </Link>
      </div>
    </div>
  );
};
export default Header;
