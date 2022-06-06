import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import { useState } from "react";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevState) => prevState + 1);
  };
  return (
    <Router>
      <Header clickCount={clickCount} />
      <Routes>
        <Route
          exact
          path="/"
          element={<ShopPage handleClick={handleClick} />}
        />
        <Route
          exact
          path="/cart"
          element={<CartPage handleClick={handleClick} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
