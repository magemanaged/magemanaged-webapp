import React, { useEffect, useState } from "react";
import { apiConfig } from "../../../auth/merlin/config";
import { Merlin } from "../../../auth/merlin/api";
import { TabList } from "../components/TabList/TabList";
import PageHeader from "../components/Header/PageHeader";
import AddJob from "./components/AddJob/AddJob";
import ViewJobs from "./components/ViewJobs/ViewJobs";

function JobListings() {
  const pageTitles = ["All jobs", "Add job", "Status Steps", "Metrics"];
  const { callMerlin } = Merlin();
  const [jobCount, updateJobCount] = useState(0);
  const header = {
    title: "Modus21 Job Listings",
    update: `${
      jobCount == 1
        ? jobCount + " Pending job listing"
        : jobCount + " Pending job listings"
    }`,
    description: "Tracking for completed and pending job listings",
  };
  const [selectPage, setPage] = useState(pageTitles[0]);

  //Gets number of jobs in query
  function getJobList() {
    callMerlin(apiConfig.joburi, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        updateJobCount(response.length);
      });
  }

  useEffect(() => getJobList(), []);

  function updatePage(pageName) {
    setPage(pageName);
  }

  return (
    <>
      <PageHeader
        title={header.title}
        update={header.update}
        description={header.description}
      />
      <TabList
        items={pageTitles}
        click={updatePage}
        selected={selectPage}
        style={"page-tab"}
        color={"normal-color"}
      />
      <ViewJobs
        name={pageTitles[0]}
        selected={selectPage}
        updateJobList={getJobList}
        jobChanges={jobCount}
      />
      <AddJob
        name={pageTitles[1]}
        selected={selectPage}
        updateJobList={getJobList}
      />
    </>
  );
}

export default JobListings;
