class Car {
  color(c1, c2) {
    if (c2) {
      console.log("2 colors: " + c1 + " and " + c2);
    } else {
      console.log("only 1 color: " + c1);
    }
  }
}

const myCar = new Car();
myCar.color("blue", "black"); // 2 colors: blue and black
myCar.color("black");         // only 1 color: black
