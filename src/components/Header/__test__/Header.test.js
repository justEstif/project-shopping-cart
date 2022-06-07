import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("testing the Header component", () => {
  test("checking for 3 router components", () => {
    render(<MockHeader />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(2);
  });
  test("check if the shop router has proper works correctly", () => {
    render(<MockHeader />);
    const shopLinkElement = screen.getByRole("link", { name: /Shop/ });
    expect(shopLinkElement).toHaveAttribute("href", "/");
  });
  test("check if the cart router works correctly", () => {
    render(<MockHeader />);
    const cartLinkElement = screen.getByRole("link", { name: /Cart/ });
    expect(cartLinkElement).toHaveAttribute("href", "/cart");
  });
});
