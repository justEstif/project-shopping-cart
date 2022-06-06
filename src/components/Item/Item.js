import "./Item.css";

const Item = (props) => {
  const { name, count, price, img } = props.item;
  return (
    <div className="item-container">
      <div className="item-text-container">
        <p>{name}</p>
        <p>{count}</p>
        <p>${price}</p>
      </div>
      <img className="item-img" src={img} alt={name} />
    </div>
  );
};

export default Item;
