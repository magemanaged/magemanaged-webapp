import React from "react";
import { getByTestId, render, cleanup } from "@testing-library/react";
import { Tab } from "../Tab";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

//Test that tab renders on DOM
describe("Tab", () => {
  it("renders without crashing", () => {
    render(<Tab />);
  });

  //Test that tab renders with correct tab name assigned
  it("renders tab correctly", () => {
    const { getByTestId } = render(<Tab selected="OtherTab" name="TestTab" />);
    expect(getByTestId("tab-test")).toHaveTextContent("TestTab");
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(<Tab selected="OtherTab" name="TestTab" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
