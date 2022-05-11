import { React, useState } from "react";
import "./ViewTickets.css";
import { TabList } from "../../../components/TabList/TabList";

function ViewTickets(props) {
  const views = ["All", "Closed", "Pending"];
  const [selectView, setView] = useState(views[0]);
  return (
    <div
      className={`view-tickets-view ${
        props.selected == props.name ? "show" : "hide"
      }`}
    >
      <div className="view-tickets-card page-view-card">
        <div className="header-container">
          <div className="ticket-view-title">Support Tickets</div>
          <div className="tab-selection">
            <TabList
              items={views}
              click={setView}
              selected={selectView}
              style={"card-tab"}
              color={"reverse-color"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTickets;
