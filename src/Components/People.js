import React, { Component } from 'react'
import axios from "axios"
export default class People extends Component {
    constructor() {
        super()
        this.state = {
            searchPerson: "",
            currentPerson: {},
            isError: false,

        }
    }

    handleChange = (e) => {
        this.setState({
            searchPerson :e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { searchPerson } = this.state

        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/${searchPerson}`)
       
            this.setState({
                currentPerson: data,
                searchPerson: "",
                isError: false,
            })
        } catch (error) {
            this.setState({
                currentPerson: {},
                searchPerson: "",
                isError: true,
            })
        }


    }
    render() {
        const { seachPerson, currentPerson, isError } = this.state

        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        input="text"
                        //keeps saying value=searchPokemon is not defined. I spent almost an hour trying to fix this
                        placeholder="Find Your Person"
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                {currentPerson.name ?
                    <div>
                        <p>Name:{currentPerson.name}</p>
                        <p>Age:{currentPerson.age}</p>
                        <p>Gender:{currentPerson.gender}</p>
                    </div> : null}

                {isError ? <h2>Not Found</h2> : null}
            </div>
        )
    }
}

