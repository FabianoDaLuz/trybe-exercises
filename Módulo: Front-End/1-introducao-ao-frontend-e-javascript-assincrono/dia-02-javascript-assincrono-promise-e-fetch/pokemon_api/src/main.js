import { fetchPokemon, fetchPokemonPromiseAll } from './helpers/renderPokemon';
import 'styles.css';

const btnLoadPokemon = document.querySelector('#loadPokemon');
btnLoadPokemon.addEventListener('click', fetchPokemon);

const btnLoadPokemonPromiseAll = document.querySelector('#loadPokemonPromiseAll')
btnLoadPokemonPromiseAll.addEventListener('click', fetchPokemonPromiseAll);

