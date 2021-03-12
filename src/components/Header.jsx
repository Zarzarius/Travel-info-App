import React from 'react'

import world from "../assets/World.png"



const Header = ({ handleKeyPress,handleSubmit,handleChange}) => {
 

    return (
        <>
            <header className="App-header">
                <div className="logo">
                    <h2>Find a country</h2>
                    <img src={ world } alt="world" />
                    
                    </div>
                <form >
                    <input  onChange={(e) => handleChange(e)} type="text" name="country" id="country" placeholder="Your destination..." />
                    <button onKeyPress={ (e) => handleKeyPress(e) } onClick={ (e) => handleSubmit(e) } type="submit">Search!</button>
                    
                </form>
            </header>
            <hr/>
             
        </>
    )
}

export default Header