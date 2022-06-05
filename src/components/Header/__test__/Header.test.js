import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event"
import Header from "../Header";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Header component tests", () => {
  test("checking for 3 router components", () => {
    render(<MockHeader />);
    const linkElements = screen.getAllByRole("link")
    expect(linkElements.length).toBe(3);
  });
  test("check if the home router works correctly", () => {
    render(<MockHeader />);
    const homeLinkElement = screen.getByRole("link", { name: /Home/ })
    expect(homeLinkElement).toHaveAttribute('href', '/home');
  })
  test("check if the shop router works correctly", () => {
    render(<MockHeader />);
    const shopLinkElement = screen.getByRole("link", { name: /Shop/ })
    expect(shopLinkElement).toHaveAttribute('href', '/shop');
  })
  test("check if the contact router works correctly", () => {
    render(<MockHeader />);
    const contactLinkElement = screen.getByRole("link", { name: /Contact/ })
    expect(contactLinkElement).toHaveAttribute('href', '/contact');
  })
  test.todo("logo takes to the homepage")
  test.todo("cart takes to the shoppage")
});
