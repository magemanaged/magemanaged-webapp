import React from "react";
import { render, cleanup } from "@testing-library/react";
import { TabList } from "./TabList";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

//Must have atleast one tab to map
describe("TabList", () => {
  it("renders without crashing", () => {
    render(<TabList items={["Test Title"]} />);
  });
});

it("matches snapshot", () => {
  const tree = renderer.create(<TabList items={["Test Title"]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
