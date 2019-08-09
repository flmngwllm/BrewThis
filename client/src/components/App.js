import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import SearchBar from './SearchBar'
import OpenBrew from '../api/OpenBrew';
import BrewList from '../components/BrewList'



class App extends React.Component{

    state = {
        brewery : []
    }

    onSearchSubmit = async (city) => {
        const response = await OpenBrew.get('/search', {
        params: {query: city}
    })

    this.setState({brewery: response.data})
}


    render(){
        return(

            <div> 
                <Router>
                    <SearchBar onSubmit={this.onSearchSubmit}/>   
                    <BrewList brewery={this.state.brewery} />  
                    <Nav/>
                    <div>
                    <Switch>
                        <Route path="/" component = {Home}/>
                    </Switch>
                    </div>
                </Router>
                 </div>
        )
    }
}

export default App;