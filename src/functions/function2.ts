//passing parameters to a function 

function hello(name: string): string {
    return `Hello ${name}!`;
}

console.log(hello("AB"));


//function taking multiple parametrs
function add(num1: number,num2: number) : number {
    return num1+num2;
}

console.log(add(123,444));

export {};