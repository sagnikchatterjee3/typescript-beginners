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
    display(){
        console.log(`${this.firstName} ${this.lastName} ${this.frequentFlyerNo}`);
    }
}

let passenger1: Passenger = new Passenger("Rohan","Sharma",3456);

passenger1.display();