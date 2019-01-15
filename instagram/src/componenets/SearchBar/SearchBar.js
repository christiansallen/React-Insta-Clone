import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
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
        <form onSubmit={e => props.search(e)}>
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={props.handleChange}
          />
        </form>
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
