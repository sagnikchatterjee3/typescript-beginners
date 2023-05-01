//Implement function overloading by creating afunction doubleMe 
// take a numeric and string data and double it up
//for numeric simple double it up
// for string it appends the string to it 

// resricitng the type of the input at compile time
function doubleMe(x: number): string;
function doubleMe(x: string): string;
function doubleMe(data: any): string {
    // data added here so as to prevent undefined 
    if (data && typeof data === "number") {
        return (data * 2).toString();
    }
    else if (data && typeof data === "string") {
        return (`${data} ${data}`);
    }

    return '><)';
}

console.log(doubleMe("John"));
console.log(doubleMe(123));
