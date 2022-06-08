import React from "react";
import {
  booxAir2Plus,
  canonEos,
  ps5,
  samsungGalaxy22,
  sonyXm5,
  xpsDesktop,
} from "../../assets/img/index";

import { Item } from "../Components";
// import Item from "../Item/Item";
import "./Items.css";

const itemsInShop = [
  {
    name: "Sony WH-1000XM5",
    price: 400,
    img: sonyXm5,
  },
  {
    name: "Boox Note Air2 Plus",
    price: 500,
    img: booxAir2Plus,
  },
  {
    name: "Dell XPS Desktop",
    price: 2600,
    img: xpsDesktop,
  },
  {
    name: "Playstation 5",
    price: 500,
    img: ps5,
  },
  {
    name: "Canon Eos Rebel T7",
    price: 500,
    img: canonEos,
  },
  {
    name: "Samsung Galaxy s22 Ultra",
    price: 1100,
    img: samsungGalaxy22,
  },
];

// TODO move Items into the ShopPage
const Items = ({ handleAddToCart }) => {
  // TODO decouple
  const returnItems = (items) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <Item item={item} handleAddToCart={handleAddToCart} />
      </React.Fragment>
    ));
  };
  return (
    <div>
      <div className="items-container">{returnItems(itemsInShop)}</div>
    </div>
  );
};
export default Items;
