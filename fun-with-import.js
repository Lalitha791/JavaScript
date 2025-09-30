// Import prompt-sync for user input
import prompt from 'prompt-sync';

// Create prompt function
const promptSync = prompt();

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function hello(a, b) {
    return (a + b);
}

// Greeting function
greetUser("Lalitha");

// Number input using imported prompt
let num1 = promptSync("Enter first number: ");
let num2 = promptSync("Enter second number: ");

console.log(hello(parseInt(num1), parseInt(num2)));
