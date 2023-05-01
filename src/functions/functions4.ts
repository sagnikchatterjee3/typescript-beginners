//convert a named function to a anonymoucs function 

const anon1 = function (name: string): string {
    return "Hello " + name;
}

//these anonymous functions are only useful in used inside a varibale or a callback functions.

console.log(anon1("mr crabs"));