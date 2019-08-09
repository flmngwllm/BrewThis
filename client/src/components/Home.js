import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <h1>Brew This</h1>
                <h3>The best brew you have had this week</h3>
                <Link to="/BrewSearch"><button>Search</button></Link>

            </div>
        );
    }
}

export default Home;