import React from "react";
import { Tab } from "./components/Tab";
import "./TabList.css";

export const TabList = (props) => {
  return (
    <div className={`${props.style}`}>
      <ul className="tab-list">
        {props.items.map((tabName) => (
          <li key={tabName}>
            <Tab
              name={tabName}
              click={props.click}
              selected={props.selected}
              color={props.color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
