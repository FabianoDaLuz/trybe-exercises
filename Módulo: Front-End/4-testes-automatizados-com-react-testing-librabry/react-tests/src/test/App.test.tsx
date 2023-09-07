import { render, screen } from '@testing-library/react';

import App from '../App';

it('should show "Vite + React" text', () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
})

test('Verifica se o input de email está na tela', () => {
    render(<App />);

    const emailInput = screen.getByLabelText('Email:');

})
// Acessar os elementos na tela

// Agir interagindo com os elementos na tela

// Aferir