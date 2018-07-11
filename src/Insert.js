import React from "react";
import PropTypes from "prop-types";

var Insert = (props) => (
  <div>
    <input type="text" onChange={(e) => props.handleInputChange(e)} /><button type="button" onClick={() => props.handleInput()}>Go</button>
  </div>
);


export default Insert;