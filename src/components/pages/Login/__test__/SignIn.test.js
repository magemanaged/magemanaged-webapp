import React from "react";
import { render, cleanup } from "@testing-library/react";
import SignIn from "../SignIn";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("SignIn", () => {
  it("renders without crashing", () => {
    render(<SignIn />);
  });
});
