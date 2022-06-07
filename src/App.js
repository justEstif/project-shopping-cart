import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import { useState } from "react";

const removeMatchingName = (items, name) =>
  items.filter((item) => item.name !== name);

const findIndexOfItem = (items, name) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === name) return i;
  }
};
// TODO create returnNewCart

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [items, setItems] = useState([]);

  const handleAddToCart = ({ name, count, price }) => {
    let tempItems = items;
    let tempIndex = findIndexOfItem(items, name);

    // TODO figure out how to extract the conditional into a separate function
    tempIndex >= 0
      ? (tempItems[tempIndex].count = tempItems[tempIndex].count + count)
      : tempItems.push({ name, count, price });

    setItems(tempItems);
    setClickCount(tempItems.length);
  };
  const handleRemoveFromCart = (name) =>
    setItems(removeMatchingName(items, name));
  const handleCheckout = () => setItems([]);
  return (
    <Router>
      <Header clickCount={clickCount} />
      <Routes>
        <Route
          exact
          path="/"
          element={<ShopPage handleAddToCart={handleAddToCart} />}
        />
        <Route
          exact
          path="/cart"
          element={
            <CartPage
              items={items}
              handleCheckout={handleCheckout}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
export { removeMatchingName, findIndexOfItem };
