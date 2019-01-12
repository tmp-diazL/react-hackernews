import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className="form-container">
    <div className="inputbar">
      <input
        type="text"
        name="searchTerm"
        onChange={onChange}
        className="input-control"
      />
      <button className="btn-control">Search</button>
    </div>
  </form>
);

export default SearchBar;
