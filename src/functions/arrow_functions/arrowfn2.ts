//passing parameters to a arrow function.


const hello = (name: string): string => {
    return "Hello "+name;
}

const product = (num1: number, num2: number) : number => {
    return num1*num2;
}


console.log(hello("Sagnik"));
console.log(product(123,333));


export {};