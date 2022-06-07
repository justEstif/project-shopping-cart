// test if the button will clear the items
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event"
import Cart from "../Cart"
const MockApp = () => {
  return (
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );
};

describe.skip("testing the Cart component", () => {
  test.todo("check the removeMatchingName");
  test.skip("testing total")
  test.todo("returnItems")
});
