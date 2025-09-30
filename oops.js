    // Object Literal
    const car = {
      make: 'Toyota',
      model: 'Camry',
      start: function() {
        console.log('Engine started');
      }
    };

    // ES6 Class
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      }
    }
    const john = new Person('John Doe', 30);


Encapsulation: The bundling of data (properties) and methods (functions) that operate on the data within a single unit (an object), and 
restricting direct access to some of the object's components. 
In JavaScript, this is achieved through closures or conventions (e.g., using _ prefix for "private" properties).
Inheritance: The mechanism by which one object (or class) can acquire the properties and methods of another object (or class). 
In JavaScript, this is primarily achieved through prototype chains, and with ES6 classes, through the extends keyword.









      class Animal {
      constructor(name) {
        this.name = name;
      }
      speak() {
        console.log(`${this.name} makes a sound.`);
      }
    }

    class Dog extends Animal {
      constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
      }
      speak() {
        console.log(`${this.name} barks.`);
      }
    }
    const myDog = new Dog('Buddy', 'Golden Retriever');
    myDog.speak(); // Output: Buddy barks.



Polymorphism: The ability of objects of different classes to respond to the same method call in a way that is specific to their own class. 
In JavaScript, this is often seen through method overriding in inherited classes.
Abstraction: Hiding complex implementation details and showing only the essential features of an object. 
While JavaScript doesn't have explicit abstract classes or interfaces like some other OOP languages, 
abstraction is achieved by designing well-defined public interfaces for objects and hiding internal logic.















