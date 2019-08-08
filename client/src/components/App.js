import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'



class App extends React.Component{
    render(){
        return(
            
            <div> 
                <Router>
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