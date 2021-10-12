import React from "react";
import avatar from "./images/man-avatar.png";
import status from "./images/status.png";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Header.css";
import { IoPersonCircle } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section">
        <IoPersonCircle className="person-icon" />
        <div className="header-right-section">
          <img className="header-icon" src={status} alt="status icon" />
          <AddIcon className="header-icon" />
          <MoreHorizIcon className="header-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
