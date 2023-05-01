let courses: Array<string> = ["Angular", "React", "ES6", "Go", "Socket.io"];

courses.push("Spring Security");

console.log(courses);

//to assign any type of data:
// using any type
// or while defining the array, if we add a numeric type, it will assume it as a 
// hetereogenrous type of data.

courses.forEach((course: string) => {
    if (course === "Angular") {
        console.log("OH NO !!!")
    } else {
        console.log(course);
    }
})

// destructuring of arrays 
// i.e we can assign individual elements of arrays to seperate instances of our code 
// start with left elements and goes on 
let [a,b,c]= courses;
console.log(`${a} -->  ${b}  <--  ${c}`);



export { };
