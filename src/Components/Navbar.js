import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav>
                    <Link to="/">
                        <img className="navBarImg" src="https://www.nicepng.com/png/full/95-958755_totoro-icon-png-totoro-png.png" alt="Totoro Character"></img>
                    </Link>{"  "}
                    <Link to="/movies">Movies</Link>{"  "}
                    <Link to="/people">People</Link>{"  "}
                    <Link to="/locations">Locations</Link>{"  "}
                </nav>
            </div>
        )
    }
}
