// work with functions

// functions need their params typed
function test1(testString: string): void {
    console.log(testString)
}

const test2 = (testString: string) => console.log(testString)

// functions return values
function test3(params: string): string {
    return params;
}

const test4 = (testString: string): string => testString;

// optional paramaters

let obj = {
    name: "john",
    age: 20,
}
// this will console.log if the there is a parameter of age on an object
console.log(obj?.age);

// same optional can be used in func params
function test5(a: number, b: number, c?: number): number {
    return c !== undefined ? a * b * c : a * b;
}

// we can assign defaults in the parameters like in vanilla javascript
// now if the second param is not passed we will default to 5
function test6(a: number, b: number = 5): number {
    return a * b;
}

// rest operator
function test7(...args: number[]) {

}

function test8(...args: (string | number)[]) {

}
