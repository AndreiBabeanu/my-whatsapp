import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="Search or start new chat"
        className="searchbar"
      />
    </div>
  );
};

export default Searchbar;
