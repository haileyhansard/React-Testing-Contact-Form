import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />); 
});

test('App renders the form header h1', () => {
  render(<App />);
  const header = screen.getByText(/please fill out form below/i)
  expect(header).toBeInTheDocument()
});



