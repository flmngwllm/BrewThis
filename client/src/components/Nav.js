import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div id="Nav">
            <div id="navLinks" className="navDivs">
                <div className="navOpt">
            <Link to="/"><h1>Brew This</h1></Link>
            </div>
            <Link to="/">Home</Link>
            <Link to="/BrewSearch">Search</Link>
            <Link to="/Favorites">Favorites</Link>
        </div>
        </div>
    )
}

export default Nav;