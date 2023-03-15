import React, { useEffect, useState } from 'react';
import getPokemon from '../../services/getPokemon';

export function Pokemon({keyword}){
    const [pokemon, setPokemon] = useState({});
    

    useEffect(function(){
        getPokemon({keyword})
            .then(pokemon => {
                setPokemon(pokemon);
            });
    }, [keyword]);
    

    return(
        <>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.imgURL}></img>
        </>
    )
}