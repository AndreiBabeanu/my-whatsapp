import React, { useContext } from "react";
import "./Sidebar.css";
import Header from "./header/Header";
import Searchbar from "./searchbar/Searchbar";
import Contacts from "./contacts/Contacts";
import { Context } from "../../App";
import Group from "./header/add-new-group/Group";

const Sidebar = () => {
  const { showCreateGroup } = useContext(Context);

  return !showCreateGroup ? (
    <div className="sidebar-container">
      <Header />
      <Searchbar />
      <Contacts />
    </div>
  ) : (
    <div className="sidebar-container">
      <Group />
    </div>
  );
};

export default Sidebar;
