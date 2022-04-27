import React from "react";
import "./SignIn.css";
import "../../../App.css";
import "./AnimatedSignIn.css";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../auth/ms/aad/config";
import { Navigate } from "react-router";
import { Button } from "../../Button";

function SignIn() {
  function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
    return <Navigate push to="/dashboard" />;
  }

  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  return (
    <>
      {isAuthenticated ? <Navigate push to="/dashboard/home" /> : null}
      <div className="full-page">
        <div className="wrapper">
          <div className="login-box custom-card">
            <div className="logos">
              <div className="mm-logo">
                <img id="logoSignIn" src="./mm_logo_full_sub.svg" alt="" />
              </div>
              <img className="company-logo" src="./company_logo.png" alt="" />
            </div>
            <div className="btn-container">
              <Button
                valid={true}
                onClick={() => handleLogin(instance)}
                buttonStyle={"btn--interact"}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SignIn;
