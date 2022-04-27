import { React, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import "./Navbar.css";
import "../../App.css";
import UserView from "../navComponents/UserView";
import { NavButton } from "../navComponents/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGear,
  faPeopleGroup,
  faLaptop,
  faFile,
  faPrint,
  faHeadset,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

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
          <div id="nav-list" className="nav-btns">
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Home")}
            >
              <NavButton
                name="Home"
                icon={<FontAwesomeIcon className="fa-icon" icon={faHouse} />}
                selected={selectedBtn}
                linkto="/dashboard/home"
              />
            </div>
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Employees")}
            >
              <NavButton
                name="Employees"
                icon={
                  <FontAwesomeIcon className="fa-icon" icon={faPeopleGroup} />
                }
                linkto="/dashboard/users"
                selected={selectedBtn}
              />
            </div>
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Job Listings")}
            >
              <NavButton
                name="Job Listings"
                icon={
                  <FontAwesomeIcon className="fa-icon" icon={faNewspaper} />
                }
                linkto="/dashboard/jobs"
                selected={selectedBtn}
              />
            </div>
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Add a Device")}
            >
              <NavButton
                name="Add a Device"
                icon={<FontAwesomeIcon className="fa-icon" icon={faPrint} />}
                linkto="/dashboard/adddevice"
                selected={selectedBtn}
              />
            </div>
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Support")}
            >
              <NavButton
                name="Support"
                icon={<FontAwesomeIcon className="fa-icon" icon={faHeadset} />}
                linkto="/dashboard/support"
                selected={selectedBtn}
              />
            </div>
            <div
              className="btn-container"
              onClick={() => setSelectedBtn("Settings")}
            >
              <NavButton
                name="Settings"
                icon={<FontAwesomeIcon className="fa-icon" icon={faGear} />}
                linkto="/dashboard/settings"
                selected={selectedBtn}
              />
            </div>
          </div>
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
