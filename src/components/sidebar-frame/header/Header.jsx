import React from "react";
import avatar from "./images/man-avatar.png";
import status from "./images/status.png";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section">
        <img className="avatar" src={avatar} alt="avatar from flaticon.com" />
        <div className="header-right-section">
          <img className="status" src={status} alt="status icon" />
          <AddIcon className="add-icon" />
          <MoreHorizIcon className="more-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
