import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event"
import App, { removeMatchingName, findIndexOfItem } from "./App";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe.skip("testing the App component", () => {
  // test.todo("don't test the handleCheckout");
  test.todo("check the removeMatchingName");
  test.todo("testing the findIndexOfItemfunction");
  test.todo("testing the returnNewChart function");
});

