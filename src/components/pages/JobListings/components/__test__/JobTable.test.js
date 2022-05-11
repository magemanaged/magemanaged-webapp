import React from "react";
import { render, cleanup } from "@testing-library/react";
import JobTable from "../AddJob";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("JobTable", () => {
  it("renders without crashing", () => {
    render(<JobTable />);
  });
});
