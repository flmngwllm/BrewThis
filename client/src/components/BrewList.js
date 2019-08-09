import React from 'react';
import BrewCard from './BrewCard'


const BrewList = (props) => {
    const brewery = props.brewery.map((breweries)=>{
        return <div key={breweries.id} breweries={breweries} >
                <a href = {breweries.website_url}>{breweries.name}</a>
                {breweries.brewery_type}
                {breweries.street}
                {breweries.phone}

        </div>

        
    })


    return(
        <div>
            {brewery}
        </div>
    )
}

export default BrewList