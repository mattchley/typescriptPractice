// Class structures and syntaxt for typescript
class Animal {
    // Public, private, and protected all work in the same case as Java 
    // Public is accessable anywhere
    // Private only within that class
    // protected only within the class any subclass that is extended
    public name: string; // Make it so the property is readonly and can not be changed
    private age: number;
    protected species: string
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    public getName() {
        return this.name;
    }
    public getAge() {
        return `${this.age}`;
    }
    protected getSpecies() {
        return this.species;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "canine");
    }

    public getInfo(): string {
        // the age is not accessable in the Dog class becuase it is private 
        // species is available because it is protected
        return `${this.getName()} is a ${this.getSpecies()}`
    }
}
const animal = new Animal("richard", 5, "horse")
console.log(animal.getAge())
console.log(animal.getName())
// console.log(animal.getSpecies()) is not accessible because it is outside of the class
const dog = new Dog("bennie", 3);
console.log(dog.getInfo())