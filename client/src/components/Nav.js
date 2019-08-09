import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        //navigation bar component that contains links to pages
        <div id="Nav">
            <div id="navLinks" className="navDivs">
                <div className="navOpt">
            <Link to="/">Brew This</Link>
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