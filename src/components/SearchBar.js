import React from "react";

const SearchBar = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className="my-4">
    <div className="input-group">
      <input
        type="text"
        name="searchTerm"
        onChange={onChange}
        className="form-control"
      />
      <div className="input-group-append">
        <button className="btn btn-info">Search</button>
      </div>
    </div>
  </form>
);

export default SearchBar;
