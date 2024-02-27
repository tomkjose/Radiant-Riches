import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__input--container">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            style={{
              cursor: "pointer",
              color: "#989fa7",
              paddingLeft: "9px",
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
          <input type="text" className="navbar__input" />
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">Categories</li>
          <li className="navbar__item">Website Builders</li>
          <li className="navbar__item">Today's deals</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
