import React, { Component } from 'react'
import axios from "axios"
import "./Locations.css"

export default class Locations extends Component {
    constructor() {
        super()

        this.state = {
            locations: [],
            showList: false,
        }
    }

    getLocations = async () => {
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/locations")

        this.setState({
            locations: data.map((loc) => loc.name),
        })
        console.log(data)
    }

    componentDidMount(){
        this.getLocations()
    }

    handleClick = () => {
      this.setState((prevState) => {
        return {
          showList: !prevState.showList
        }
      }
      )
  }

    render() {
        const {locations, showList} = this.state
        const listItems = locations.map(loc => <li key={loc.id}>{loc}</li>)
        return (
            <div>
                <h1>List of Locations</h1>
                <button
                onClick={this.handleClick}
                >
                {showList ? "Hide Locations" : "Show Locations"}
                </button>
                <ul>
                    { showList ? listItems : null }
                </ul>
            </div>
        )
    }
}
