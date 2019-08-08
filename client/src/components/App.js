import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import SearchBar from './SearchBar'
import OpenBrew from '../api/OpenBrew';



class App extends React.Component{

    state = {
        brewery : []
    }

    onSearchSubmit = async (name) => {
        const response = await OpenBrew.get('/search', {
        params: {query: name}
    })

    console.log(
    {brewery: response.data})
    
}

    render(){
        return(

            <div> 
                <Router>
                    <SearchBar onSubmit={this.onSearchSubmit}/>        
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