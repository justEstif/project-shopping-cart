import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event"
import CartPage from "../CartPage"

const MockApp = () => {
  return (
    <BrowserRouter>
      <CartPage />
    </BrowserRouter>
  );
};
describe.skip("testing the CartPage", () => {
  // test.todo("don't test the handleCheckout");
});
