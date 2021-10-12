import React from "react";
import "./Sidebar.css";
import Header from "./header/Header";
import Searchbar from "./searchbar/Searchbar";
import Contacts from "./contacts/Contacts";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Header />
      <Searchbar />
      <Contacts />
    </div>
  );
};

export default Sidebar;
