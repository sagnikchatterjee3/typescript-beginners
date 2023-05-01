//default values to functions 

function display(id: number, name: string, role: string = "Admin") {
    console.log(`id is ${id} , name is ${name} and role is ${role}`);
}

//passing functions as parameters -> as typescript and javascript are higher order functions 

function calculator(fun: any): void {
    console.log(fun());
}


display(123, "lambda");

calculator(display);

export { };