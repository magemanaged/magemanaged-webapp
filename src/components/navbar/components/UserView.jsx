import React, { useEffect, useState, Fragment } from "react";
import "./UserView.css";
import { graphConfig } from "../../../auth/ms/graph/config.js";
import { MSGraph } from "../../../auth/ms/graph/api";

function UserView() {
  const [profileInfo, setProfileInfo] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [isPicLoading, setPicLoading] = useState(true);
  const { callMSGraph } = MSGraph();

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    callMSGraph(graphConfig.graphMeProfilePicEndpoint, "blob").then(
      (response) => {
        LoadProfilePhoto(response);
      }
    );

    callMSGraph(graphConfig.graphMeEndpoint, "json").then((response) => {
      console.log(response);
      setProfileInfo(response);
    });
  }

  function LoadProfilePhoto(response) {
    var URL = window.URL || window.webkitURL;
    var imageUrl = URL.createObjectURL(response);
    console.log(process.env.REACT_APP_GRAPHMEPROFILEPIC);
    setPhotoURL(imageUrl);
    setPicLoading(false);
  }

  useEffect(() => {
    RequestProfileData();
  }, []);

  return (
    <div className="wrapper">
      <div className="flex-wrapper">
        <div className="headshot-wrapper">
          <div
            id="loading-pic"
            className={isPicLoading ? "show" : "hide"}
          ></div>
          <img
            id="profile_pic"
            className={isPicLoading ? "hide" : "show"}
            src={photoURL}
          />
        </div>
        <div className="profile-info">
          <div className="user-name">
            {profileInfo ? profileInfo.displayName : ""}
          </div>
          <div className="username">
            {profileInfo
              ? profileInfo.userPrincipalName.substr(
                  0,
                  profileInfo.userPrincipalName.indexOf("@")
                )
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;
