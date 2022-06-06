import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";

const RouteSwitch = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ShopPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
