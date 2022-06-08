import "./Quantity.css";
const Quantity = (props) => {
  // TODO maybe this and CartButton can become one Form
  const { count, handleChange, handleClick } = props;
  return (
    <div className="item-quantity-container">
      <button type="button" id="minus" onClick={handleClick}>
        -
      </button>
      <input type="number" value={count} onChange={handleChange}></input>
      <button type="button" id="add" onClick={handleClick}>
        +
      </button>
    </div>
  );
};
export default Quantity;
