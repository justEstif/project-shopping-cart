import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { clickCount } = props;
  return (
    <div className="header">
      <div className="link">
        <Link to={""} className="headerlink-title">
          Shop
        </Link>
      </div>
      <div className="link">
        <Link to={"cart"} className="headerlink-title">
          Cart {clickCount}
        </Link>
      </div>
    </div>
  );
};

export default Header;
