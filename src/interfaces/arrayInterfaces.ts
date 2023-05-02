// two types
// number index 
// string index 


//numeric indexed interface 
interface StudentName {
    [index: number]: string;
}

let student1: StudentName = ["John", "Bob", "Doug"];


//string indexed interface
interface StudentScore {
    [index: string]: number;
}

let student2: StudentScore = {};

student2["John"] = 100;
student2['Bob'] = 90;


//to loop through the string indexed interface , use for in loop
for (let item in student2) {
    console.log(item);
}