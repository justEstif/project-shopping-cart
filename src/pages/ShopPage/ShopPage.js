import React from "react";
import {
  booxAir2Plus,
  canonEos,
  ps5,
  samsungGalaxy22,
  sonyXm5,
  xpsDesktop,
} from "../../assets/img/index";

import { Item } from "../../components/Components";

import "./ShopPage.css"

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

const ShopPage = ({ handleAddToCart }) => {
  const returnItems = (items) => {
    return items.map((item, index) => (
      <React.Fragment key={index}>
        <Item item={item} handleAddToCart={handleAddToCart} />
      </React.Fragment>
    ));
  };
  return (
    <div className="items-container">
      <div className="items">{returnItems(itemsInShop)}</div>
    </div>
  );
};

export default ShopPage;
