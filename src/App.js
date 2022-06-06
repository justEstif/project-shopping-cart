import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import { useState } from "react";

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [items, setItems] = useState([]);
  const handleAddToCart = (newItem) => {
    const matchingName = (value) => newItem.name === items.value.name;
    let tempMatch = items.filter(matchingName)
    let tempItems = items;
    // let tempIndex;
    // if (tempIndex >= 0) {
    //   tempMatch = tempItems[tempIndex];
    //   tempMatch.count += newItem.count;
    //   tempItems[tempIndex] = tempMatch;
    // } else tempItems.push(newItem);
    //
    // setItems(tempItems)
    tempItems.push(newItem);
    console.log(tempItems);
    console.log(`tempMatch: ${tempMatch}`)

    // let tempMatch; let matchIndex;
    // let tempState = items;
    // for(const item of items)
    // for (let i = 0; items.length; i++) {
    //   if (items[i].name === newItem.name) {
    //     matchIndex = i;
    //     tempMatch = items[i]
    //   }
    // }
    // if (tempMatch) {
    //   tempMatch.count += newItem.count;
    //   tempState[matchIndex] = tempMatch;
    // } else {
    //   tempState.push(newItem);
    // }
    // setItems(tempState);
    // setClickCount(items.length);
    // console.log(newItem);
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
