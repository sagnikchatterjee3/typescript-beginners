// passing any number of parameters to function 
// using rest params 
// also called as variadic arguments or variadic functions 


const product = function(...nums: any){
    //nums here is any number of parameters
    //internally a array 
    nums.forEach((num: any) => console.log(num));
    //finding the product using reduce 
    const result = nums.reduce((acc: any,val:any) => {
        acc= acc *val;
        return acc;
    },1);
    console.log(result);
    
}

//specific parameters after the rest parameter
//the rest param should always the last param in our function.
//also the rest param should always be of a array type.

const product2 = function(x:number,y:number,...nums:any){
    //....TDD .
}



export {};

