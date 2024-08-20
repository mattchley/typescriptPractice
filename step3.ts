// Type alias
// create a blue print that makes for a specific structure use an Uppercase

type Person = {
    name: string;
    age: number;
    // we can also use the optional operator here allow for a value/no value situation
    email?: string;
    // if you want a property to be static add read only to it
    readonly DOB?: string;
}

function printPerson(person: Person): void {
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
}

const myPerson: Person = { name: "john", age: 20 };
const secondPerson: Person = { name: "jane", age: 20, email: "x@gmail.com" };
printPerson(myPerson);

// Intersections allow for seperate alias to come together

type Employee = {
    id: number;
    title: string;
}

type employedPerson = Person & Employee;

// notice the optionals are not causing an error, if you comment out a different propr it will error
let newEmployee: employedPerson = {
    name: "john",
    age: 20,
    id: 123,
    title: "JS Dev"
}

// we can use a union as well
type employed = Person | Employee
// this allows us to mix and match the details
let otherEmployee: employed = {
    name: "Jane",
    id: 1234,
    title: "Senior JS DEv"
}