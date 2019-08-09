import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import BrewSearch from './BrewSearch'


class App extends React.Component{

   


    render(){
        return(

            <div> 
                <Router>

                    <Nav/>
                    <div>
                    <Switch>
                        <Route exact path="/" component = {Home}/>
                        <Route exact path="/Search" component ={BrewSearch}/>
                    </Switch>
                    </div>
                </Router>
                 </div>
        )
    }
}

export default App;