import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./Dashboard.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobListings from "./pages/JobListings/JobListings";
import { apiConfig } from "../auth/merlin/config";
import Settings from "./pages/Settings/Settings";
import { MSGraph } from "../auth/ms/graph/api";
import { Merlin } from "../auth/merlin/api";
import Support from "./pages/Support/Support";
import Employees from "./pages/Employees/Employees";

function Dashboard(props) {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [givenName, setGivenName] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [comment, setComment] = useState(null);
  const { RequestProfileInfo } = MSGraph();
  const { callMerlin } = Merlin();

  instance.setActiveAccount(instance.getAllAccounts()[0]);

  function getInfo() {
    RequestProfileInfo().then((response) => {
      setUserInfo(response);
      setGivenName(response.givenName);
    });

    callMerlin(apiConfig.greetingsuri, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.greeting);
        setComment(response.greeting);
      });
  }

  useEffect(() => {
    if (isAuthenticated) {
      getInfo();
    }
  }, []);

  return (
    <>
      {!isAuthenticated ? <Navigate push to="/" /> : null}
      <div className="dash-wrapper">
        <div className="nav-wrapper">
          <Navbar />
        </div>
        <div className="main-view-wrapper">
          <Routes>
            <Route
              path="/home"
              element={<Home givenName={givenName} comment={comment} />}
            />
            <Route path="/users" element={<Employees />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/settings"
              element={<Settings updateTheme={props.updateTheme} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
