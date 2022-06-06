import { items } from "../../assets/img/index";
import Item from "../Item/Item";


const itemsInformation = {
  sonyXm5: {
    name: "Sony WH-1000XM5",
    price: 400,
    img: items.sonyXm5
  },
  booxAir2Plus: {
    name: "Boox Note Air2 Plus",
    price: 500,
    img: items.booxAir2Plus
  },
  xpsDesktop: {
    name: "Dell XPS Desktop",
    price: 2600,
    img: items.xpsDesktop
  },
  ps5: {
    name: "Playstation 5",
    price: 500,
    img: items.ps5
  },
  canonEos: {
    name: "Canon Eos Rebel T7",
    price: 500,
    img: items.canonEos
  },
  samsungGalaxy22: {
    name: "Samsung Galaxy s22 Ultra",
    price: 1100,
    img: items.samsungGalaxy22
  }
};
const Items = () => {
  return (
    <div className="items-container">
      <Item item={itemsInformation.sonyXm5} />
      <Item item={itemsInformation.booxAir2Plus} />
      <Item item={itemsInformation.xpsDesktop} />
      <Item item={itemsInformation.ps5} />
      <Item item={itemsInformation.canonEos} />
      <Item item={itemsInformation.samsungGalaxy22} />
    </div>
  );
};
export default Items;
// function that will loop through the items and create some item component
