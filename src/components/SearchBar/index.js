import React, { useState } from 'react';
import { Pokemon } from '../Pokemon';
import './SearchBar.css';

export function SearchBar({keyword}){
    const [pokemonToSearch, setPokemonToSearch] = useState(keyword);    
    const handleSubmit = evt => {
        evt.preventDefault();
        setPokemonToSearch(evt.target.pokemonName.value);
    }

    const handleMouseOut = evt => {
        evt.target.value = '';
        evt.target.blur();
    }


    return (
        <>
            <div className="box">
                <form 
                    name="search"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        className="input"
                        id="pokemonName"
                        name="txt"
                        onMouseOut={handleMouseOut}
                        />
                </form>
                <i className="fas fa-search"></i>

            </div>
            <Pokemon keyword={pokemonToSearch}/>
        </>
    )
}