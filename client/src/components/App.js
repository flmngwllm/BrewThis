import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import BrewSearch from './BrewSearch'
import './App.css'
import '../css/Nav.css'
import '../css/SearchBar.css'
import '../css/BrewList.css'
import '../css/Home.css'


class App extends React.Component{

   


    render(){
        return(
//set up routing to navigate to different component pages
            <div className="App"> 
                <Router>

                    <Nav/>
                    <div>
                    <Switch>
                        <Route exact path="/" component = {Home}/>
                        <Route exact path="/BrewSearch" component ={BrewSearch}/>
                    </Switch>
                    </div>
                </Router>
                 </div>
        )
    }
}

export default App;