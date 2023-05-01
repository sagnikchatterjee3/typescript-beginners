//objects in javacript have properties that have some some values.
export let student = {
    firstName:"John",
    age: 22,
    score: 85,
    lastName: "Biley",

};

//to access the object using the dot notation 
console.log(`Name: ${student.firstName} -- Age: ${student.age} -- Score :${student.score}`);


// adding destrucring the object 
// have to use the exact property name in object destrutring 
let {firstName,lastName} = student;

console.log(firstName);
console.log(lastName);
