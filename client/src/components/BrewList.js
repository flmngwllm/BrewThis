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
        <div id= "container">
            <table id="primtable">
                <tbody>
                    <tr className="tbRow">
                    <th className="mainName">Name</th>
                    <th className="mainName">Type</th>
                    <th className="mainName">Street</th>
                    <th className="mainName">Phone</th>
                    </tr>
                    {brewery}
                </tbody>
            </table>
            {brewery}
        </div>
    )
}

export default BrewList