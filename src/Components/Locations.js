import React, { Component } from 'react'
import axios from "axios"

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
        // console.log(data.results.map((loc)=>loc.name))

        this.setState({
            locations: data.map((loc) => loc.name)
        })
    }

    handleClick = () => {
        this.setState({
            showList: !this.state.showList
        })
    }
    componentDidMount() {
        this.getLocations()
    }

    render() {
        const { locations, showList } = this.state
        const listItems = locations.map((loc, i) => <li key={i}>{loc}</li>)

        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{showList ? "Hide Locations" : "Show Locations"}</button>

                <ul>{showList ? listItems : null}
                </ul>
            </div>
        )
    }
}
