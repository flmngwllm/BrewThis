import React from 'react';


const BrewList = (props) => {
    //mapping through breweries and creating a table row with table data to assign 
    const brewery = props.brewery.map((breweries)=>{
        return     <tr className="tbRow">
             <td className="tbData"><a className="brewery-name" href = {breweries.website_url}>{breweries.name}</a></td>
                 <td className="tbData">{breweries.brewery_type}</td>
                 <td className="tbData">{breweries.street} {breweries.city},{breweries.state}</td>
                 <td className="tbData"> {breweries.phone}</td>
             <div key={breweries.id} breweries={breweries} >
               
                 
            </div>
            </tr> 
            
            
           
            
    })

    return(
        //table with fields that contains the mapped breweries
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