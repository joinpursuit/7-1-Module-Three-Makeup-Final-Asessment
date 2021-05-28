import React, { Component } from 'react'
import axios from "axios"

export default class Movies extends Component {
    constructor(){
        super()
        this.state ={
            movies:[],
            selectedMovie:"",
            currentMovie:{},
        }
    }

    handleChange = async (e) => {
        
           this.setState({
               selectedMovie: e.target.value,
           })    

           const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
           console.log(data)

           this.setState({
               currentMovies:data
           })
    }

    
    getMovies = async () => {
        const {data} = await axios.get("https://ghibliapi.herokuapp.com/films")
        this.setState({ movies: data})
    }

    componentDidMount(){
    this.getMovies()
}

    render() {
        const {movies, selectedMovie, currentMovie } =this.state
        const options = movies.map((movie,i) => {
            return(
                <option key={i} value={movies.title}>
                    {movie.title}
                </option>
            )
        })
        return (    
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange} value={selectedMovie} title="" releasedate="" description="" >
                    <option></option>
                    {options}
                </select>
                <h2>{currentMovie.title}</h2>
                
                <p>{currentMovie.title}</p>
                <p>{currentMovie.release_date}</p>
                <p>{currentMovie.description}</p>
                
                
            </div>
        )
    }
}
