// array of arrow functions 

let myarrowArr: Array<Function> = [];

for(let i=0;i<100;i++){
    myarrowArr.push((): number => {
        return Math.random()*100;
    });
}

myarrowArr.forEach((fn) => {
    console.log(fn());
})

export {};