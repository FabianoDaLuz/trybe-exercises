export default async function getPokemonData(name) {
    try {
        if (!name) throw new Error('Nome não informado!');
        // const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json();
        // const data = await results.json();
        // return data;
        return (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json();
    } catch (error) {
        console.log(error);
        alert(error);
    }
}