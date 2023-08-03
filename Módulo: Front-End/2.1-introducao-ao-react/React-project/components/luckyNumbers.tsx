import React from 'react';

function luckyNumbers() {
    function luckyNumber() {
        return Math.floor(Math.random() * 60 + 1);
    }

    const show = true;
    return (
        <div>
            <h2 className="subtitle">Seus núemros da sorte da Mega-Sena são:</h2>
            {show && (
                <ul>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                    <li>{luckyNumber()}</li>
                </ul>
            )}
        </div>
    )
}

export default luckyNumbers;