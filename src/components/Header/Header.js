import { Link } from "react-router-dom";
import CartTab from "../CartTab/CartTab";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"home"} className="headerlink-title">
        Home
      </Link>
      <Link to={"shop"} className="headerlink-title">
        Shop
      </Link>
      <CartTab />
    </div>
  );
};

export default Header;
