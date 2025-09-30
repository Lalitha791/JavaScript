// greetings.js - Export functions

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function sayGoodbye(name) {
    console.log("Goodbye, " + name + "!");
}

// Named exports
export { greetUser, sayGoodbye };

// Default export
export default function welcome(name) {
    console.log("Welcome, " + name + "!");
}
