import { React } from "react";
import { NavButton } from "./components/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGear,
  faPeopleGroup,
  faPrint,
  faHeadset,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

function NavMenu(props) {
  return (
    <div id="nav-list" className="nav-btns">
      <div className="btn-container" onClick={() => props.selection("Home")}>
        <NavButton
          name="Home"
          icon={<FontAwesomeIcon className="fa-icon" icon={faHouse} />}
          selected={props.selected}
          linkto="/dashboard/home"
        />
      </div>
      <div
        className="btn-container"
        onClick={() => props.selection("Employees")}
      >
        <NavButton
          name="Employees"
          icon={<FontAwesomeIcon className="fa-icon" icon={faPeopleGroup} />}
          linkto="/dashboard/users"
          selected={props.selected}
        />
      </div>
      <div
        className="btn-container"
        onClick={() => props.selection("Job Listings")}
      >
        <NavButton
          name="Job Listings"
          icon={<FontAwesomeIcon className="fa-icon" icon={faNewspaper} />}
          linkto="/dashboard/jobs"
          selected={props.selected}
        />
      </div>
      <div
        className="btn-container"
        onClick={() => props.selection("Add a Device")}
      >
        <NavButton
          name="Add a Device"
          icon={<FontAwesomeIcon className="fa-icon" icon={faPrint} />}
          linkto="/dashboard/adddevice"
          selected={props.selected}
        />
      </div>
      <div className="btn-container" onClick={() => props.selection("Support")}>
        <NavButton
          name="Support"
          icon={<FontAwesomeIcon className="fa-icon" icon={faHeadset} />}
          linkto="/dashboard/support"
          selected={props.selected}
        />
      </div>
      <div
        className="btn-container"
        onClick={() => props.selection("Settings")}
      >
        <NavButton
          name="Settings"
          icon={<FontAwesomeIcon className="fa-icon" icon={faGear} />}
          linkto="/dashboard/settings"
          selected={props.selected}
        />
      </div>
    </div>
  );
}

export default NavMenu;
