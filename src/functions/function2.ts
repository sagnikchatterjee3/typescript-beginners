//passing parameters to a function 

function hello(name: string): string {
    return `Hello ${name}!`;
}

console.log(hello("AB"));


//function taking multiple parametrs
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(123, 444));

//making optional parameters in a function  :- as overloading functions don't work 
// in typescript.

function display(id?: number, name?: string, role?: string): string {
    return `${name} has the ${role} with an id: ${id}`;
}

console.log(display());


export { };