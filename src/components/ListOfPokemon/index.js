import React, { useEffect, useState } from 'react'
import { getListOfPokemons } from '../../services/getListOfPokemons'

export function ListOfPokemon(){
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(function(){
        getListOfPokemons()
        .then(pokemons => {
            setPokemons(pokemons);
        });
    });
    return (
        <>
            {
                
            }
            <div 
                className='list-container'
                style={{height: "400px"}}
            >
                <div
                    className='list-items'
                    style={{height: "800px"}}
                >
                    {
                        pokemons.map(singlePokemon =>
                            <div
                                key={singlePokemon.name}
                            >{singlePokemon.name}</div>
                            )
                    }
                </div>
            </div>
        </>
    )
}