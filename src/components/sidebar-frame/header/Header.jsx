import React, { useContext } from "react";
import status from "./images/status.png";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Header.css";
import { IoPersonCircle } from "react-icons/io5";
import { Context } from "../../../App";

const Header = () => {
  const { showCreateGroup, setShowCreateGroup } = useContext(Context);

  const addGroup = () => {
    setShowCreateGroup(!showCreateGroup);
  };

  return (
    <div className="header-container">
      <div className="header-section">
        <IoPersonCircle className="person-icon" />
        <div className="header-right-section">
          <img className="header-icon" src={status} alt="status icon" />
          <AddIcon className="header-icon" onClick={addGroup} />
          <MoreHorizIcon className="header-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
