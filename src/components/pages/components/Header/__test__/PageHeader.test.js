import React from "react";
import { render, cleanup } from "@testing-library/react";
import PageHeader from "../PageHeader";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("PageHeader", () => {
  it("renders without crashing", () => {
    render(<PageHeader />);
  });
});
