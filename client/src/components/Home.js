import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            
            //home component text and links to Seach and favorites pages
            <div id="Home">
                <div id="main-text">
                <h1 id="name-text">Brew This</h1>
                
                
                <p id="sub-text">The best brew you have had this week</p>
                </div>

                <div id="entry">
                <Link className="fr-btn" to="/BrewSearch">Search</Link>
                <Link className="fr-btn"to="/Favorites">Favorites</Link>
                </div>

            </div>
        );
    }
}

export default Home;