import axios from "axios";
import React, { Component } from "react";
import "./Movies.css";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedValue: "",
      currentMovie: {},
    };
  }

  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );

    this.setState({
      currentMovie: data,
    });
  };

  getMovies = async () => {
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);

    this.setState({ movies: data });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, selectedValue, currentMovie } = this.state;
    const options = movies.map((movie) => {
      return (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      );
    });

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange} value={selectedValue}>
          <option></option>
          {options}
        </select>
        <h1>
          {currentMovie.title ? <h1> Title: {currentMovie.title} </h1> : null}
        </h1>
        {currentMovie.title ? (
          <h3>Release Date: {currentMovie.release_date}</h3>
        ) : null}
        {currentMovie.title ? (
          <p>Description: {currentMovie.description}</p>
        ) : null}
      </div>
    );
  }
}
