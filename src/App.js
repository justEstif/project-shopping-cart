import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import { useState } from "react";

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [items, setItems] = useState([]);
  const handleAddToCart = ({ name, count, price }) => {
    let tempItems = items;
    let tempIndex;
    for (let i = 0; i < tempItems.length; i++) {
      if (tempItems[i].name == name) {
        tempIndex = i;
      }
    }
    tempIndex >= 0
      ? (tempItems[tempIndex].count = tempItems[tempIndex].count + count)
      : tempItems.push({ name, count, price });

    setItems(tempItems);
    setClickCount(tempItems.length);
  };
  return (
    <Router>
      <Header clickCount={clickCount} />
      <Routes>
        <Route
          exact
          path="/"
          element={<ShopPage handleAddToCart={handleAddToCart} />}
        />
        <Route exact path="/cart" element={<CartPage items={items} />} />
      </Routes>
    </Router>
  );
};

export default App;
