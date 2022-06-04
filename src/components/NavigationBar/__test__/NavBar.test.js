import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event"
import NavBar from "../NavBar";

describe("testing if the NavBar comonent works as expected", () => {
  test.skip("initial test", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/right/i);
    expect(linkElement).toBeInTheDocument();
  });

  test.todo("render with the right text");
  test.todo("home and shop button work");
  test.todo("clicking on the butotn of current page does nothing");
});
