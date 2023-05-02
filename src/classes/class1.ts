class Passenger {
    firstName: string | undefined;
    lastName: string | undefined;
    frequentFlyerNo: number | undefined;
    constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }


    //adding methods for this class :- Function Properties
    display() {
        console.log(`${this.firstName} ${this.lastName} ${this.frequentFlyerNo}`);
    }
}

let passenger1: Passenger = new Passenger("Rohan", "Sharma", 3456);

passenger1.display();


//using for in to display all object 
for (let item in passenger1) {
    console.log(item);
    //console.log(passenger1[item]);
}

// display only properties not functions 
//1.
for (let item in passenger1) {
    if (item !== "display") {
        console.log(item);
    }
}

//2. using the instance of operator
for(let item in passenger1){
    if(passenger1[item] instanceof Function){
        continue; 
    }
    else {
        //....
    }
}