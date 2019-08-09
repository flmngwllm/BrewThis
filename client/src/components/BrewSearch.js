import React, { Component } from 'react';
import SearchBar from './SearchBar'
import OpenBrew from '../api/OpenBrew';
import BrewList from './BrewList'

class Search extends Component {

//state for breweries
    state = {
        brewery : []
    }
  //openBrew api send a request to retrieve date and setting the statee
    onSearchSubmit = async (city) => {
        const response = await OpenBrew.get('/search', {
        params: {query: city}
    })

    this.setState({brewery: response.data})
}

    render() {
        return (
            //Search bar and the Brew List componet that returns the list of brewereis
            <div id="search">
                <h1>Enter a City below </h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>   
                    <BrewList brewery={this.state.brewery} />  
            </div>
        );
    }
}

export default Search;