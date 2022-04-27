import React, { useEffect, useState } from "react";
import "./ViewJobs.css";
import { apiConfig } from "../../../../auth/merlin/config";
import { Merlin } from "../../../../auth/merlin/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TabList } from "../../../constants/TabList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Scrollbars } from "react-custom-scrollbars";
import { Positions } from "./JobTable";

function ViewJobs(props) {
  const views = ["All", "Complete", "Pending"];
  const [selectView, setView] = useState(views[0]);
  const { callMerlin } = Merlin();
  const [jobList, updateJobList] = useState(null);

  //Gets job list from merlin API
  function getJobList() {
    callMerlin(apiConfig.joburi, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        updateJobList(response);
        props.updateJobList();
      });
  }

  //Delete a job from the list
  function deletePosition(position_id) {
    callMerlin(apiConfig.joburi, {
      method: "DELETE",
      body: JSON.stringify({
        _id: position_id,
      }),
    }).then(() => {
      getJobList();
    });
  }

  useEffect(() => {
    getJobList();
  }, [props.selected]);

  return (
    <div
      className={`view-job-view ${
        props.selected == props.name ? "show" : "hide"
      }`}
    >
      <div className="view-job-card page-view-card">
        <div className="header-container">
          <div className="job-view-title">Positions</div>
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
        <Positions updateJobs={getJobList} />
      </div>
    </div>
  );
}

export default ViewJobs;
