const firstNumber = 9;
const secondNumber = 3;
let thirdNumber = firstNumber + secondNumber;
console.log(thirdNumber);

setTimeout(() => {
    thirdNumber = firstNumber - secondNumber;
    console.log(thirdNumber)
}, 1000);


