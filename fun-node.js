// Node.js version - works in terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function hello(a, b) {
    return (a + b);
}

// Greeting function
greetUser("Lalitha");

// Number input function
rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        const result = hello(parseInt(num1), parseInt(num2));
        console.log('Result:', result);
        rl.close();
    });
});
