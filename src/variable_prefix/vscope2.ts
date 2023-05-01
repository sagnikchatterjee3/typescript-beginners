// const is used to mkae a variable immutbale.


//var pi = 3.14;


//using var it can changed accidently 

//instead use const 
const pi = Math.PI;

console.log(pi);

//functions using const and var

var product = function(x: number,y:number): number {
    return x*y;
}


console.log(product);

//but this product can be reassigned , better to use const.


export {};