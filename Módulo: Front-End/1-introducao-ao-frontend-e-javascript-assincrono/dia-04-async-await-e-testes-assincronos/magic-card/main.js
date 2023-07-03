const { getMagicCard } = require('../magic');
require('../../startest/mockSetup');

jest.setTimeout(10000);

describe('1 - Testes de função getMagicCard', () => {
    it('1.1 Verifique se getMagicCard é uma função.'() => {
        expect(typeof getMagicCard).toBe('function');
    });

    // Devemos adicionar o 'async' no it e o 'await' antes de chamar
    // função `getMagicCard`
    it('1.2 Verifique se a função fetch foi chamada com o endpoint correto', async () => {

    }

})