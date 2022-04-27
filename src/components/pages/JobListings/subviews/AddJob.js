import React, { useState } from "react";
import { Merlin } from "../../../../auth/merlin/api";
import { tokenRequest, apiConfig } from "../../../../auth/merlin/config";
import { useMsal } from "@azure/msal-react";
import "./AddJob.css";
import "../../../../App.css";
import { Button } from "../../../Button";
import { toast } from "react-toastify";
import { MSGraph } from "../../../../auth/ms/graph/api";

function AddJob(props) {
  const { callMerlin } = Merlin();
  const [positionName, setPosition] = useState(null);
  const [startDate, setDate] = useState(null);
  const [location, setLocation] = useState(null);
  const [pendingSubmit, setPending] = useState(false);
  const { RequestProfileInfo } = MSGraph();

  //Form validation for submit button. Submit button not rendered until all required inputs are met
  function SubmitButton() {
    if (positionName && startDate && location && !pendingSubmit) {
      return (
        <Button
          type="submit"
          valid={true}
          form="new_job_position_form"
          buttonSize={"btn--medium"}
          buttonStyle={"btn--submit"}
        >
          Submit
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          valid={false}
          form="new_job_position_form"
          buttonSize={"btn--medium"}
          buttonStyle={"btn--submit"}
        >
          Submit
        </Button>
      );
    }
  }

  //Clears form data, ready for next input
  let clearData = () => {
    let inputs = document.querySelectorAll(".input-type");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    setPosition(null);
    setDate(null);
    setLocation(null);
    SubmitButton();
  };

  let submitData = async () => {
    return new Promise(function (resolve, reject) {
      RequestProfileInfo().then((response) => {
        callMerlin(apiConfig.joburi, {
          method: "POST",
          body: JSON.stringify({
            position_title: positionName,
            start_date: startDate,
            city_location: location,
            user_name: response.displayName,
            user_id: response.id,
          }),
        })
          .then((response) => {
            if (response && response.ok) {
              props.updateJobList();
              clearData();
              setPending(false);
              resolve();
            } else {
              setPending(false);
              reject();
            }
          })
          .catch((e) => {
            setPending(false);
            reject();
          });
      });
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (positionName && startDate && location && !pendingSubmit) {
      setPending(true);
      toast.promise(submitData, {
        pending: "Saving position...",
        success: "Position saved 👌",
        error: "Error 🤯",
      });
    }
  };
  return (
    <div
      className={`add-job-view ${
        props.selected === props.name ? "show" : "hide"
      }`}
    >
      <div className="add-job-card page-view-card">
        <div className="job-add-title">Add a new job</div>
        <div className="job-sub-title">
          Adding job positions helps to ensure that all licenses and assets are
          available by the start date.
        </div>
        <div className="job-addition-form">
          <form id="new_job_position_form" onSubmit={submit}>
            <div className="input-area">
              <div className="input-flex">
                <label htmlFor="job_title">Job Position</label>
                <input
                  id="job_title"
                  className="input-type"
                  name="job_title"
                  type="text"
                  placeholder={"Enter job position here."}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </div>
              <div className="input-flex">
                <label htmlFor="start_date">Estimated start date</label>
                <input
                  id="estimated_start_date"
                  className="input-type"
                  name="start_date"
                  type="date"
                  placeholder={"Enter estimated start date here."}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="input-flex">
                <label htmlFor="city_location">Position Location</label>
                <input
                  id="city_location"
                  className="input-type"
                  name="city_location"
                  type="text"
                  placeholder={"Enter city here."}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
