import promptSync from 'prompt-sync';
const prompt = promptSync();



function greetUser(name) {
    console.log("Hello, " + name + "!");
  }
  
  greetUser("Lalitha"); 



function hello(a, b) {
    return (a + b);
}

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
console.log(hello(parseInt(num1), parseInt(num2)));
