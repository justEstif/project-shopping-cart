import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from "./pages/ShopPage/ShopPage";

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
