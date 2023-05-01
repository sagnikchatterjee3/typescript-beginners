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

//function can also return back another function that can be invoked 

function inverseCalculator(): any {
    function subtract(num1: number,num2: number):number {
        return num1-num2;
    }
    return subtract;
}

const sub = inverseCalculator();
console.log(sub(20,5));

export { };