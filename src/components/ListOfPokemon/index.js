import { List, ListItemButton, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getListOfPokemons } from '../../services/getListOfPokemons'

export function ListOfPokemon(){
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(function(){
        getListOfPokemons()
        .then(pokemons => {
            setPokemons(pokemons);
        });
    }, [setPokemons]);
    return (
        <>
        <div style={{height: '800px', overflow: 'auto'}}>
            <List component="nav"
                className='carousel'
            >
                {
                    pokemons.map((singlePokemon)=>(
                        <ListItemButton 
                            className='carousel__item'
                            key={singlePokemon.name}>
                            <ListItemText primary={singlePokemon.name}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </div>
        </>
    )
}