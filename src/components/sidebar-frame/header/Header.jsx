import React, { useContext, useState, useEffect } from "react";
import status from "./images/status.png";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Header.css";
import { IoPersonCircle } from "react-icons/io5";
import { Context } from "../../../App";
import Dropdown from "./dropdown/Dropdown";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { showCreateGroup, setShowCreateGroup } = useContext(Context);
  
  console.log(JSON.parse(localStorage.getItem("profile")));

  const profile = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(profile);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // console.log("trecem pe aici?");
    // console.log(profile);
    console.log(location);
    setUser(profile);
  }, [location]);

  const addGroup = () => {
    setShowCreateGroup(!showCreateGroup);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header-container">
      <div className="header-section">
        <IoPersonCircle className="person-icon" />
        <h5>{user?.first_name}</h5>
        <div className="header-right-section">
          <img className="header-icon" src={status} alt="status icon" />
          <AddIcon className="header-icon" onClick={addGroup} />
          <MoreHorizIcon className="header-icon" onClick={toggleDropdown} />
          {showDropdown && (
            <Dropdown setUser={setUser} setShowDropdown={setShowDropdown} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
