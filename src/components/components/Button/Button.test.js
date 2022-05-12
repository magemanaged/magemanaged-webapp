import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button buttonStyle="btn--submit" buttonSize="btn--medium" />);
  });

  it("activates click event", () => {
    const buttonClicked = jest.fn();
    const tree = renderer.create(
      <Button onClick={buttonClicked} valid={true} />
    );
    const foundButton = tree.root.findByType("button");
    foundButton.props.onClick();
    expect(buttonClicked).toHaveBeenCalledTimes(3);
  });
});
