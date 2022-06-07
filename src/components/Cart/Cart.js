import React from "react";
const Cart = ({ items }) => {
  // const total = items.reduce(getTotalItem, 0);
  const total = items.reduce((acc, item) => acc + (item.count + item.price), 0);

  return (
    <div>
      <div>In cart</div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div>
            <div>Name: {item.name}</div>
            <div>Count: {item.count}</div>
            <div>Price: {item.price}</div>
          </div>
        </React.Fragment>
      ))}
      <div>Total Price: {total}</div>
    </div>
  );
};

export default Cart;
