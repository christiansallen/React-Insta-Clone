import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="left-section">
        <span className="ig-icon">
          <i className="fab fa-instagram" />
        </span>
        <span className="divider">|</span>
        <h1 className="header">Instagram</h1>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-section">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
