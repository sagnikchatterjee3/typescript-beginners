interface Exterior {
    color: string;
    numOfDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}


let myCar: Car = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Grey",
    numOfDoors: 4,
    seats: 5,
    auto: false,
}

console.log(myCar);