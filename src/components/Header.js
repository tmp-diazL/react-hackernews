import React from "react";
import SearchBar from "./SearchBar";

import "./Header.css";

const Header = ({ onChange, onSubmit }) => {
  return (
    <div className="header">
      <div className="logo">
        <a href="index.html">H</a>
      </div>
      <SearchBar onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
};

export default Header;
