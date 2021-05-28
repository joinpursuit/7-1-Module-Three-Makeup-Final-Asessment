import React, { Component } from "react";
import axios from "axios";
import "./People.css";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      searchPeople: "",
      currentPerson: {},
      isError: false,
    };
  }

  handleChange = async (e) => {
    this.setState({
      searchPeople: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchPeople } = this.state;

    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/people/?q=${searchPeople}`
      );

      this.setState({
        currentPerson: data[0],
        searchPeople: "",
        isError: false,
      });
    } catch (e) {
      this.setState({
        currentPerson: {},
        searchPeople: "",
        isError: true,
      });
    }
  };

  render() {
    const { searchPeople, currentPerson, isError } = this.state;
    return (
      <div className="person">
        <h1>Search for a Person</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Person"
            value={searchPeople}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>

        {currentPerson && !isError ? (
          <div>
            <h3>
              <i>Name: {currentPerson.name}</i>
            </h3>
            <h3>
              <i>Age: {currentPerson.age}</i>
            </h3>
            <h3>
              <i>Gender: {currentPerson.gender}</i>
            </h3>
          </div>
        ) : (
          <h3>Not Found</h3>
        )}
      </div>
    );
  }
}
