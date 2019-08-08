import React,{Component} from 'react';




class SearchBar extends Component{


state = {
    name : ''
}

onInputChange = (event) =>{
    this.setState({name : event.target.value})
}

onFormSubmit = (event)=>{
    event.preventDefault()

    this.props.onFormSubmit(this.state.name)
}



    render(){
        return(
            <div>
                SearchBar
                <form onSubmit={this.onFormSubmit}>

                    <input type='text' value={this.state.name}
                    onChange={this.onInputChange}/>

                </form>
            </div>
        )
    }
}

export default SearchBar

