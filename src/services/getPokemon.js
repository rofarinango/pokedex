import React from 'react';

export default function getPokemon({keyword = 'charizard'} = {}){
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${keyword}`;

    return fetch(apiURL)
                .then(res => res.json())
                .then(response => {
                    
                    const {name, sprites} = response;
                    const {front_default} = sprites.other.home;
                    const pokemon = {name: name, imgURL: front_default};
                    return pokemon;
                });
}