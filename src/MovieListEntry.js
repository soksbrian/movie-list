import React, { Component } from "react";
import PropTypes from "prop-types";

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.handleWatchedToggle(this.props.movie);
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <span>
          {this.props.movie.title}
        </span>
        {this.props.movie.watched ? <span>Watched</span> : <span>Not Watched</span>}
      </div>
    )
  }
}

export default MovieListEntry;

