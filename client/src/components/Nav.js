import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <Link to="/"><h1>Brew This</h1></Link>
            <Link to="/">Home</Link>
            <Link to="/Search">Search</Link>
            <Link to="/Favorites">Favorites</Link>
        </div>
    )
}

export default Nav;