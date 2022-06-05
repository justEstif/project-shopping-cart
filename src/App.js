import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShopPage from "./pages/ShopPage/ShopPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
