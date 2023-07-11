import { describe, test, expect } from 'jest';
import getPokemonData from '../src/helpers/fetchPokemon';

describe('fetchPokemon', () => {
    test('Retornar os objetos da API', async () => {
        const data = await getPokemonData('bulbasaur');
        console.log(data);
        expect(data.name).toBe('bulbasaur');
        expect(data.height).toBe(7);
        expect(data.abilities[0].ability.name).toBe('overgrow');

        //precisamos criar o mock aqui para funcionar
        //expect(fetch).toHaveBeenCalled();
        //expect(fetch).toHaveBeenCalledWith('https://pokeapi.co./api/v2/pokemon);

        expect(fetch).toHaveBeenCalled();
        expect(fetch).toHaveBeenCalled(`https://pokeapi.co/api/v2/pokemon`);

    });
    test('Retornar os objetos da API - Verificando erro', async () => {
        await expect(getPokemonData('')).rejects.toThrow();
    });
});