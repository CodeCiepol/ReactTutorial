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


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// example of using .call
const cart = {
    value: 0,
    discount: 0,
    getReducedPrice: function() {
      return this.value - (this.value * this.discount);
    }
  }
  const cartWithStuff = {
    value: 300,
    discount: 0.12,
    products: ["Cherries", "Bananas", "Pineapples"]
  }
  console.log(cart.getReducedPrice.call(cartWithStuff))
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


const another = new Circle(1); // "new" will add an empty object, set "this" to pointer to that object and finally return an object from a function Circle
