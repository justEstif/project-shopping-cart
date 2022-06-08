import React from "react";
import { items } from "../../assets/img/index";
import Item from "../Item/Item";
import "./Items.css";

const itemsInShop = [
  {
    name: "Sony WH-1000XM5",
    price: 400,
    img: items.sonyXm5,
  },
  {
    name: "Boox Note Air2 Plus",
    price: 500,
    img: items.booxAir2Plus,
  },
  {
    name: "Dell XPS Desktop",
    price: 2600,
    img: items.xpsDesktop,
  },
  {
    name: "Playstation 5",
    price: 500,
    img: items.ps5,
  },
  {
    name: "Canon Eos Rebel T7",
    price: 500,
    img: items.canonEos,
  },
  {
    name: "Samsung Galaxy s22 Ultra",
    price: 1100,
    img: items.samsungGalaxy22,
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
