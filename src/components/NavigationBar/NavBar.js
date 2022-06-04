import "./NavBar.css"
import { Link } from "react-router-dom";
import amazonLogo from "../../img/amazon-logo.svg";
export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img className="amazon-logo" alt="amazon-logo" src={amazonLogo} />
          Home
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/shop" className="nav-item">
          Shop
        </Link>
      </div>
    </div>
  );
}
