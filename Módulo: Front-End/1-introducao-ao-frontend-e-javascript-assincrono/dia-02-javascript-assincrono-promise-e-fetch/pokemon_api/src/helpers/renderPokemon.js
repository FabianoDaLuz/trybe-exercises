import getPokemonData from "./fetchPokemon";

function fetchPokemon() {
    try {
        let section = document.getElementById('pokemon-list');
        section.innerHTML = '';

        let pokemonNames = ['bulbasaur', 'pikachu', 'squirtle', 'charmander'];

        pokemonNames.map(async name => {
            const pokemon = await getPokemonData(name);

            let card = document.createElement('div');
            card.className = 'pokemon-card';

            let title = document.createElement('h2');
            title.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            let image = document.createElement('img');
            image.src = pokemon.sprites.other['official-artwork']['front_default'];

            let type = document.createElement('p');
            type.textContent = 'Type: ' + pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(type);

            section.appendChild(card);
        });
    }
    catch (error) {
        console.log(error);
        alert(error);
    }
}

export async function fetchPokemonPromiseAll() {
    try {

        let section = document.getElementById('pokemon-list');
        section.innerHTML = '';

        let pokemonNames = ['bulbasaur', 'pikachu', 'squirtle', 'charmander'];

        /*[
            [],
            [],
            [],
            []
        ]*/

        const pokemons = await Promise.all(
            pokemonNames.map(async name =>
                await getPokemonData(name)
            )
        );

        console.log(pokemons);
        pokemons.map(pokemon => {
            console.log(pokemon);
            let card = document.createElement('div');
            card.className = 'pokemon-card';

            let title = document.createElement('h2');
            title.textContet = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            let image = document.createElement('img');
            image.src = pokemon.sprites.other['official-artwork']['front']

            let type = document.createElement('p');
            type.textContent = 'Type: ' + pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(type);

            section.appendChild(card);
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
