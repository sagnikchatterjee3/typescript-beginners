let n1: number = 10;
console.log(n1);

//defining variables of certain types

let s1: string = "some string";
let s2: string = `This is another dynamic string ${s1}`;
console.log(s2);

//boolean type of variables 
//useful for logic and conditional stmts 

let bool1: boolean = true;
if (bool1) {
    console.log("Ok ");
}

//using any to add any data type to another 

let any_item: any = {
    productId: 1,
    productName: 'phone',
    productCost: 1000,
};

console.log(any_item);

//homogeneous array type

let arr1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach((item: number) => {
    console.log(item);
})
//length of array
console.log(arr1.length);

//heterogeneous array :- different types of items in the ame 
// can do as Array<any>

let arr2: Array<any> = [1,null,false,"ok",{productName: 'nothing'}];

arr2.forEach((item) => {
    console.log(item);
})

