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


