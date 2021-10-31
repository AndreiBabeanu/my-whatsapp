import React from "react";
import "./Dropdown.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Dropdown = ({ setUser, setShowDropdown }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: "LOG_OUT" });
    // setShowDropdown(false);
    // setUser(null);
    history.push("/auth");
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-line">
        <h6>Archived</h6>
      </div>
      <div className="dropdown-line">
        <h6>Starred</h6>
      </div>
      <div className="dropdown-line">
        <h6>Settings</h6>
      </div>
      <div className="dropdown-line" onClick={handleClick}>
        <h6>Log Out</h6>
      </div>
    </div>
  );
};

export default Dropdown;
