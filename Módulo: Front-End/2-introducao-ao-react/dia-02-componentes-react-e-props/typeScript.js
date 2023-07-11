// number
let age: number = 26;
let price: number = 9.99;

// string
let name: string = "John Doe";
let message: string - `Hello, ${name}!`;

let isOnline: boolean = true;
let isLoggedOut: boolean = false;

// null and undefined
let data: null = null;
let info: undefined = undefined;

function sayHello(): void {
    console.log("Hello!");
}

// never
function throwError(): never {
    throw new Error("Oops!");
}

// object
let person: object = { name: "John Doe", age: 26 };