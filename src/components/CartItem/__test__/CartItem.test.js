// test if button will remove the item from the list

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event"
import CartItem from "../CartItem"

const MockApp = () => {
  return (
    <BrowserRouter>
      <CartItem />
    </BrowserRouter>
  );
};

describe.skip("testing the CartItem component", () => {
  test.todo("check the button interaction")
});
