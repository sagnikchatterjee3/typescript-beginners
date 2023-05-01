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


export { };
