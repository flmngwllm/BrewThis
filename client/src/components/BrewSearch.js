import React, { Component } from 'react';
import SearchBar from './SearchBar'
import OpenBrew from '../api/OpenBrew';
import BrewList from './BrewList'

class Search extends Component {

    state = {
        brewery : []
    }

    onSearchSubmit = async (city) => {
        const response = await OpenBrew.get('/search', {
        params: {query: city}
    })

    this.setState({brewery: response.data})
}

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>   
                    <BrewList brewery={this.state.brewery} />  
            </div>
        );
    }
}

export default Search;