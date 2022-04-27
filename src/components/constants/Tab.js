import React from "react";
import "./Tab.css";

export const Tab = (props) => {
  return (
    <div data-testid="tab-test" className="tab-container">
      <button
        onClick={() => {
          props.click(props.name);
        }}
        className={`tab-item ${
          props.selected == props.name
            ? `tab-selected ${props.color}-selected`
            : `${props.color}`
        }`}
      >
        {props.name}
      </button>
    </div>
  );
};
