// the implementation of the interfaces are called as subscribers of that interface 

// creating a functional interface 
//interface for a function.
interface Add {
    (x: number, y: number): void;
}

interface Sub {
    (x: number, y: number): number;
}

//variables that use this functional interfaces

let add: Add;
let sub: Sub;


add = function (x: number, y: number): void {
    console.log(x + y);
}

sub = function (a: number, b: number): number {
    return a - b;
}

//return types in functional interfaces
// in Add we have void return type -> same as not defining any return type(void)
// 


// interfaces can also have methods for them 

interface UserInterface {
    name: string;
    id: number;
    display(): void;
}

let product2: UserInterface = {
    name: "King Kong",
    id: 123,
    display() {
        console.log(`Product 2 ${this.name} and ${this.id}`);
    }
}

console.log(product2);

