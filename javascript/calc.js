// simple program to act as a simple calculator
let exit;

do {
    let operand = prompt("Would you like to add, subtract, multiply, or divide? ");
    let numOne = prompt("Enter the first number: ");
    let numTwo = prompt("Enter the second number: ");
    let operation;
    switch (operand) {
        case 'add':
            operation = Number(numOne) + Number(numTwo);
            alert(operation);
            break;
        case 'subtract':
            operation = Number(numOne) - Number(numTwo);
            alert(operation);
            break;
        case 'multiply':
            operation = Number(numOne) * Number(numTwo);
            alert(operation);
            break;
        case 'divide':
            operation = Number(numOne) / Number(numTwo);
            alert(operation);
            break;
    }
    exit = prompt("Would you like to exit [Y/y] for yes or [N/n] for no I want to keep calculating")
    console.log(exit)
} while (exit === 'N' || exit === 'n');

