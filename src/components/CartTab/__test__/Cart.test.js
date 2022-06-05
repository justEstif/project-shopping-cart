import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CartTab from "../CartTab";

const MockCart = () => {
  return (
    <BrowserRouter>
      <CartTab />
    </BrowserRouter>
  );
};

describe("checking if the Cart component works as expected", () => {
  test("checking for if the cart link works", () => {
    render(<MockCart />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/cart");
  });
});
