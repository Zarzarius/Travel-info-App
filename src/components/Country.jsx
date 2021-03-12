import React, { useState } from 'react';


const Country = ({results} ) => {
    
    
const pic = `https://www.countryflags.io/${results.names.iso2}/shiny/64.png`

    
    console.log('from Country comp :>> ',  results)
  return (

    <>
      <main>
          <h2 className="info" >Important Info before you travel</h2>
      <div className="country-box">
        <div className="flag">
          <h3>{ results.names.name }</h3>
        <img src={ pic } alt="flag" />
        </div>
        <div className="currency">
          
          <p>Currency: { results.currency.name } </p>
          </div>
        <div className="water">
          
          <p>Tapwater: { results.water.short }</p>
        </div>
        {results.vaccinations.length > 0 ? 
          <div className="vaccinations">
          
          <ul>{ results.vaccinations.map(el => <li className="vacc-name">{ el.name } : { el.message }.</li>) } </ul>
        </div> : <div className="vaccinations"><p>No Vaccinations needed</p></div>          
        }
        
        <p>{results.telephone[1]} </p>   
          
      </div>
      </main>
      </>
  )
}

export default Country;