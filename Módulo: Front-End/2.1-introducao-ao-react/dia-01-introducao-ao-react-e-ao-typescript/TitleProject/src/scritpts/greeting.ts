type Person = {
    name: string
    lastName: string;
}

export function greeting(person :Person ) {
    return `Hello, ${person.name} ${person.lastName}!`;
}