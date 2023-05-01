// Enum or Enums are a collection of constant values 

enum Gender {
    Male,
    Female,
    Non_Binary,
}

//access the items as read only 

console.log(Gender.Male);
console.log(Gender.Non_Binary);
console.log(Gender.Female);

console.log(Gender[0]);
console.log(Gender[2]);

//predefining the start of the enum with a constant value 
enum Weekends{
    Saturday=6,
    Sunday
}


console.log(Weekends.Sunday);