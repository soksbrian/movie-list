import React, { Component } from "react";
import ReactDOM from "react-dom";
// import movieData from "../../data/movieData";

import MovieList from "./MovieList";
import MovieListEntry from "./MovieListEntry";
import Search from "./Search";
import Insert from "./Insert";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [], //movieData
      watchedMovies: [],
      textSearch: '',
      textInput: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);

  }

  handleInput() {
    let movie = {'title': this.state.textInput, 'watched': false};
    let copyArr = this.state.movies.concat(movie);
    this.setState({movies: copyArr});
  }

  handleInputChange(e) {
    this.setState({
      textInput: e.target.value
    });
  }

  handleSearch() {
    let query = this.state.textSearch;
    let newArr = [];
    this.state.movies.forEach(movie => {
      if (query === movie.title) {
        newArr.push(movie);
      }
    })
    newArr.length > 0 ? this.setState({movies: newArr}) : alert("no movie by that name found");
  }

  handleSearchChange(e) {
    this.setState({
      textSearch: e.target.value
    });
  }

  handleWatchedToggle(movie) {
    let copy = this.state.movies.slice(0);
    for (let i = 0; i < copy.length; i++) {
      if (JSON.stringify(copy[i]) === JSON.stringify(movie)) {
        copy[i].watched = !copy[i].watched; 
      }
    }
    this.setState({
      movies: copy
    });
  }

  render() {
    return (
      <div>
        <h1>Movie</h1>
        <Insert id="input" handleInputChange={this.handleInputChange} handleInput={this.handleInput} />
        <Search id="search" handleSearchChange={this.handleSearchChange} handleSearch={this.handleSearch} />
        <MovieList id="list" movies={this.state.movies} handleWatchedToggle={this.handleWatchedToggle}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));

export default App;

