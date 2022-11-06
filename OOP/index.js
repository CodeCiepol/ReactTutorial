//let x= {};
// let x = new Objext()

//every object has a constructor property

//Factory Function

function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  //console.log('this',this)
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1); // "new" will add an empty object, set "this" to pointer to that object and finally return an object from a function Circle

class CircleClass {
  constructor(radius) {
    this.radius = radius;
  }
  draw(){
    console.log("draw");
  }
  diameter(){
    console.log(2*this.radius)
  }
}

// adding to object
circle.location = { x: 1 };
another["location"] = { x: 1 };

// for i in methods
for (let key in circle) {
  console.log(key);
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// example of using .call
const cart = {
  value: 0,
  discount: 0,
  getReducedPrice: function () {
    return this.value - this.value * this.discount;
  },
};
const cartWithStuff = {
  value: 300,
  discount: 0.12,
  products: ["Cherries", "Bananas", "Pineapples"],
};
console.log(cart.getReducedPrice.call(cartWithStuff));
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// primitives are copied by their value, objects are copied by their reference
let x = { value: 10 },
  y = 10;

function zmienna(props) {
  props.value++;
}
function zmienna1(props) {
  props++;
}

zmienna(x);
zmienna1(y);
console.log(x);
console.log(y);
/////////////////////////////////////////////////////////////

// STOP WATCH OBJECT
class State {
  constructor() {
    this.value="notStarted"
  }
  switchState(newState){
    this.value=newState
  }
  compareState(other){
    return this.value===other
  }
}
// this.state=State
function Stopwatch() {
  let duration = 0,
    startTime,
    endTime,
    state = new State();
  // notStarted -> started -> stopped
  this.start = function () {
    if (state.compareState("started")) {
      throw new Error("Stopwatch is working");
    } else {
      startTime = performance.now();
      state.switchState("started")
    }
  };
  this.stop = function () {
    if (!state.compareState("started")) {
      throw new Error("Stopwatch is not working");
    } else {
      endTime = performance.now();
      duration += endTime - startTime;
      state.switchState("stopped")
    }
  };

  this.reset = () => {
    duration = 0;
    state.switchState("notStarted")
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return console.log(duration);
    },
    set: function () {
      throw new Error("U cannot change a duration");
    },
  });
}

class Rectangle {
  constructor(height,width){
      this.height = height
      this.width = width
      console.log(`creating rectangle with height: ${this.height} and width: ${this.width}`)
  }
  area(){
    return this.height*this.width
  }
  name(){
    return 'napiszeTuCos'
  }
}

const r = new Rectangle(3.5,3);

class Square extends Rectangle {
  constructor(a){
    super(a,a)
    console.log(`creating Square with height: ${a} and width: ${a}`)
}
name(){
  const parentName = super.name()
  return "nieNapisze"+parentName
}
}

const s= new Square(3);


