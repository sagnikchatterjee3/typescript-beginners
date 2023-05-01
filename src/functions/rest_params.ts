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

export {};

