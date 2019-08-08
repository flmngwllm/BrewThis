import React from 'react'
import {Browser as Router, Route, Switch} from 'react-router-dom';



class App extends React.Component{
    render(){
        return(
            
            <div> 
                <Router>
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