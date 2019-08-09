import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <div id="main-text">
                <h1 id="name-text">Brew This</h1>
                

                <p id="sub-text">The best brew you have had this week</p>
                </div>

                <div id="entry">
                <Link to="/BrewSearch"><button>Search</button></Link>
                <Link to="/Favorites"><button>Favorites</button></Link>
                </div>

            </div>
        );
    }
}

export default Home;