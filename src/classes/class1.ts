class Passenger {
    firstName: string | undefined;
    lastName: string | undefined;
    frequentFlyerNo: number | undefined;
    constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

}

let passenger1: Passenger = new Passenger("Rohan","Sharma",3456);
console.log(passenger1.firstName + " " + passenger1.lastName + " " + passenger1.frequentFlyerNo);
