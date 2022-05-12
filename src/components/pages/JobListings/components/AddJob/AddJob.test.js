import React from "react";
import { render, cleanup } from "@testing-library/react";
import AddJob from "./AddJob";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("AddJob", () => {
  it("renders without crashing", () => {
    render(<AddJob />);
  });
});
