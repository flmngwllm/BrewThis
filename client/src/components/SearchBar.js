import React,{Component} from 'react';



//searchbar component
class SearchBar extends Component{

//state for the input field
state = {
    name : ''
}

//setting state for input field
onInputChange = (event) =>{
    this.setState({name : event.target.value})
}

//prevents the for from submitting then then calls the function that was passed
onFormSubmit = (event)=>{
    event.preventDefault()

    this.props.onSubmit(this.state.name)
}



    render(){
        return(
            <div>
            
                <form onSubmit={this.onFormSubmit}>

                    <input id="search-input" type='text' value={this.state.name}
                    onChange={this.onInputChange}/>

                </form>
            </div>
        )
    }
}

export default SearchBar

