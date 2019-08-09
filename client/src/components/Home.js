import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Brew This</h1>
                <h1>The best brew you have had this week</h1>
                <Link to="/BrewSearch"><button>Search</button></Link>

            </div>
        );
    }
}

export default Home;