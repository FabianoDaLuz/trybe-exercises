import 'styles.css';

fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then(response = console.log(response)) // resolve
    .catch(error => console.log(error)); // reject
