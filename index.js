const dupa = (x) => {
    console.log(x(5));
}

function jeden (x) {
    return 3+x;
}

function dwa(x) {
    return 2*x;
}

 dupa(jeden)
 dupa(dwa)
dupa((x) => 7*x+5)

const strzalka1 = (x) => {
    console.log('cos')
}

const strzalka2 = (x) =>  (y) => {
    return(x+y)
}

const dupa2 = strzalka2(3)

console.log(strzalka2(3)(5))
console.log(dupa2(5))

class Rectangle {
    constructor(height,width){
        this.height = height,
        this.width = width
    }
}

