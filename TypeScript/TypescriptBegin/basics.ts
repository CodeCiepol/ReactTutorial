//primitives number,string,boolean
// complex types arrays,objects

//primitives

let age: number = 12; //redundant
age=13

let userName: string // z dużej litery mamy object
userName= "dupa"
let isStupid: boolean
isStupid= true

//more complex types

let hobbies: string[]

hobbies=['dupa','kurwica']

type Person = {
    name: string
    age: number
} 

let person: Person
;
person={
    name:'max',
    age: 32
}
let people: {
    name: string
    age: number    
}[]

let course: string | number | boolean ="kurwica"
course = 1234

//functions

function add(a:number, b:number){
    return a + b
}
function printh(value:any){
    console.log(value)
    // return value
}

//generics

function insertAtBeginning<T>(array:T[], value: T){
    const newArray = [value, ...array]
    return newArray
}
const demoArray = [1,2,3]


const updatedArray = insertAtBeginning(demoArray,-1)