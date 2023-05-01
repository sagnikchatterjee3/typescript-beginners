// few more importan methods on array 

let levels: Array<number> = [20,30,12,12,500,123123,123.33];

//return a tring repr of the array ,sepe by commas
console.log(levels.toString());

//join by an seperator
console.log(levels.join("?"));

//slice -> takes numbers and slice the array and cut the array from the start and end and return that back 

console.log(levels.slice(3,5));

//slice array 
console.log(levels.toString());


//splice -> insert records to an array ... delete and insert 
//from index 2 to 3 delete and add 128 in its place instead.
console.log(levels.splice(2,3,128));
console.log(levels.toString());

