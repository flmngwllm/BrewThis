import React from 'react';
import BrewCard from './BrewCard'


const BrewList = (props) => {
    const brewery = props.brewery.map((breweries)=>{
        return <tr className="tbRow">
            <div key={breweries.id} breweries={breweries} >
                <td className="tbData"><a href = {breweries.website_url}>{breweries.name}</a></td>
                 <td className="tbData">{breweries.brewery_type}</td>
                 <td className="tbData">{breweries.street}</td>
                 <td className="tbData"> {breweries.phone}</td>
                
            </div>
            </tr>
    })

    return(
        <div id= "container">
            <table id="primTable">
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
        </div>
    )
}

export default BrewList