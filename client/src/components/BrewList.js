import React from 'react';


const BrewList = (props) => {
    const brewery = props.brewery.map((breweries)=>{
        return   <div key={breweries.id} breweries={breweries} >
                     <tr className="tbRow">
                <td className="tbData"><a className="brewery-name" href = {breweries.website_url}>{breweries.name}</a></td>
                 <td className="tbData">{breweries.brewery_type}</td>
                 <td className="tbData">{breweries.street} {breweries.city}{breweries.state}</td>
                 <td className="tbData"> {breweries.phone}</td>
                 </tr> 
            </div>
            
           
            
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
                   
                </tbody>
                
            </table>
            {brewery}
        </div>
    )
}

export default BrewList