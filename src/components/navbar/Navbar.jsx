import { React, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import "./Navbar.css";
import "../../App.css";
import UserView from "./components/UserView";
import { Button } from "../Button";
import NavMenu from "./components/NavMenu";

function Navbar() {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const { instance } = useMsal();

  function handleLogout(instance) {
    instance.logoutPopup().catch((e) => {
      console.error(e);
    });
  }

  useEffect(() => {
    setSelectedBtn("Home");
  }, []);

  return (
    <>
      <nav className="side-navbar">
        <div className="nav-container custom-card">
          <div className="company-logo">
            <img src="/company_logo.png" />
          </div>
          <div className="userInfo">
            <UserView />
          </div>
          <NavMenu selection={setSelectedBtn} selected={selectedBtn} />
          <div className="logout-button">
            <Button
              id="logout"
              valid={true}
              buttonSize={"btn--small"}
              buttonStyle={"btn--interact"}
              onClick={() => handleLogout(instance)}
            >
              Log Out
            </Button>
          </div>
          <div className="logo">
            <img src="/mm_logo_sub.svg" />
          </div>
          <div className="version">0.0.1</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
