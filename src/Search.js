import React from "react";
import PropTypes from "prop-types";

var Search = (props) => (
  <div>
    <input type="text" onChange={(e) => props.handleSearchChange(e)} /><button type="button" onClick={() => props.handleSearch()}>Go</button>
  </div>
);


export default Search;