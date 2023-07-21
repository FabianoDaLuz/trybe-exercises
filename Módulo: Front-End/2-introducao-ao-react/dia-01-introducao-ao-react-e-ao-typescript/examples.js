const a = '1';
const b = 2;

function sum(x, y) {
    return x + y
}

console.log(sum(a, b))
// retorna "12" (string) ap invés de 3(number)

function Header() {
    return (
        <h1>Olá mundo!</h1>
    );
}

// JSX
function jsxHeader() {
    const name = "Trybe";

    return (
        <h1>Olá {name}</h1>
    );
}

