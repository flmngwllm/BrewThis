import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div id="Nav">
            <div id="navLinks" className="navDivs">
                <div className="navOpt">
            <Link to="/"><h1>Brew This</h1></Link>
            </div>
            <div className="navOpt">
            <Link to="/">Home</Link>
            </div>
            <div className="navOpt">
            <Link to="/BrewSearch">Search</Link>
            </div>
            <div className="navOpt">
            <Link to="/Favorites">Favorites</Link>
            </div>
        </div>
        </div>
    )
}

export default Nav;