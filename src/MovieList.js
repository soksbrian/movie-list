import React from "react";
import PropTypes from "prop-types";
import MovieListEntry from "./MovieListEntry";

var MovieList = (props) => (
  <div id="list">
  {
    props.movies.map(movie => 
      <MovieListEntry key={movie.title} movie={movie} handleWatchedToggle={props.handleWatchedToggle} />
    )
  }
  </div> 
);


export default MovieList;