export function getListOfPokemons(){
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {results} = response;
                const pokemons = results.map(pokemon => {
                    const {name} = pokemon;
                    return {name};
                });
                return pokemons;
            });
}