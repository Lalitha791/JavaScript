# JavaScript
Java Script
function show() {
    let a=20;
    var b=30;
    console.log(a);
    console.log(b);
}
show();
console.log(a);
console.log(b);


https://github.com/sonyphoebeb/JavaScript-/blob/main/README.mdHere’s a crisp breakdown of **JavaScript methods**—categorized for clarity and speed 🔥

---

### 🧠 Core Object Methods
These are built into JavaScript objects:

| Object Type | Common Methods |
|-------------|----------------|
| `Array`     | `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `map()`, `filter()`, `reduce()`, `forEach()` |
| `String`    | `charAt()`, `includes()`, `indexOf()`, `slice()`, `substring()`, `toUpperCase()`, `toLowerCase()`, `trim()` |
| `Object`    | `hasOwnProperty()`, `keys()`, `values()`, `entries()`, `assign()` |
| `Number`    | `toFixed()`, `toString()`, `parseInt()`, `parseFloat()` |
| `Date`      | `getDate()`, `getMonth()`, `getFullYear()`, `setDate()`, `toISOString()` |

---

### ⚙️ Functional Methods
Used for logic and control:

- `setTimeout()`, `setInterval()`
- `clearTimeout()`, `clearInterval()`
- `typeof`, `instanceof`

---

### 🌐 DOM Methods (Browser-side)
Used to interact with HTML:

- `document.getElementById()`
- `document.querySelector()`
- `element.addEventListener()`
- `element.classList.add()`, `remove()`, `toggle()`
- `element.setAttribute()`, `getAttribute()`

---

### 🧪 Utility Methods
Handy for debugging and data handling:

- `JSON.stringify()`, `JSON.parse()`
- `console.log()`, `console.error()`, `console.table()`

---







# Object-Oriented Programming (OOP) in JavaScript

JavaScript supports **OOP (Object-Oriented Programming)** using **prototypes** and ES6 `class` syntax.  
OOP is based on **4 main principles**: Encapsulation, Abstraction, Inheritance, and Polymorphism.

---

## 🔹 1. Encapsulation (Data Hiding)
Encapsulation means bundling **data (properties)** and **methods (functions)** together in one unit (class/object).

```js
class Person {
  #ssn; // private property
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  getDetails() {
    return `Name: ${this.name}, SSN: [HIDDEN]`;
  }
}

const p1 = new Person("Alice", "123-45-6789");
console.log(p1.getDetails()); 
// Output: Name: Alice, SSN: [HIDDEN]
````

---

## 🔹 2. Abstraction (Hiding Implementation)

Abstraction hides unnecessary implementation details and exposes only the required functionality.

```js
class Vehicle {
  start() {
    console.log("Starting the vehicle...");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine started ✅");
  }
}

const car = new Car();
car.start(); 
// Output: Car engine started ✅
```

---

## 🔹 3. Inheritance (Code Reuse)

Inheritance allows one class to **reuse** properties and methods from another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Tommy");
d.speak(); 
// Output: Tommy barks.
```

---

## 🔹 4. Polymorphism (Many Forms)

Polymorphism allows the **same method** to behave differently depending on the object.

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area()); 
// Output: 78.54
```

---

## 🔹 Other OOP Features in JavaScript

* **Objects** → The building blocks of OOP.
* **Constructors** → Special functions to initialize objects.
* **Prototypes** → Mechanism for inheritance.
* **`this` keyword** → Refers to the current instance.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p = new Person("Alice");
p.sayHello(); 
// Output: Hello, my name is Alice
```

---

## ✅ Summary

* **Encapsulation** → Bundle + hide data.
* **Abstraction** → Hide complexity.
* **Inheritance** → Reuse code.
* **Polymorphism** → Different behavior, same method.

JavaScript supports OOP through **prototypes** and ES6 **classes**.

```

---




