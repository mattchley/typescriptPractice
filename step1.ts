// this file is to list all the available types that Typescript has

let number: number = 1;
let string: string = "hello";
let boolean: boolean = true;

// objects can also be edited to allow for more specificity
let object: object = { name: "hello" };

// using this interface we can set the types of an object
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    employed: boolean;
};
employee = {
    firstName: "john",
    lastName: "doe",
    age: 21,
    employed: false
}

// or
let person: { name: string; age: number } = {
    name: "John Doe",
    age: 21
}

// arrays must have a base type to include
let array: number[] = [1, 2, 3];

// multiDimensional array
let matrix: number[][] = [[0, 1, 2], [2, 3, 4], [3, 4, 5]]

// if using mixed types we can implement like so
let mixedArray: (string | number)[] = ['hi', 1];

let mixedMatrix: (string | number)[][] = [['hi', 1, 2], [2, 'hello', 4], [3, 4, 'greetings']]

// we can use the same options for other variables
let mixedVar: (string | number)
mixedVar = 1;
mixedVar = 'hi';
// if using a boolean we get an error
// mixedVar = true

// Literal Type
let color: "red" | "blue" | "yellow";
color = "red";
// if assigning a new value an error will occur
// color = "green";


// Tuples
// are set array structures by type still have the array functionality in JS add/remove as well as destructing
// let [firstValue, secondValue] =tuple;
let tuple: [string, number] = ["hello", 1]