class BMW {
    make!: string;
    model!: string;
    year!: string;

    // common functionality 
    commonEngineFunctionality(): void {
        console.log("Common ENGINE v8");
    }

    start(): void {
        console.log("Start");
    }
    stop(): void {
        console.log("Stop");
    }

    constructor(make: string, model: string, year: string) {
        this.make = make;
        this.year = year;
        this.model = model;
    }

}

class ThreeSeries extends BMW {
    //BMW come for free here 
    cruiseControlEnabled!: boolean;
    constructor(make: string, model: string, year: string, cruiseControlEnabled: boolean) {
        //have to extend the parent class constructor using super()
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

    cruiseControl() {
        this.cruiseControlEnabled = true;
        console.log(`Cruise Control is Enabled.`);
    }


    start():void {
        console.log('Button Start');
    }

    stop(): void {
        console.log("Button Stop");
    }
}

class FiveSeries extends BMW {
    pakingAssistEnabled!: boolean;
    constructor(make: string, model: string, year: string, parkingAssistEnabled: boolean) {
        //have to extend the parent class constructor using super()
        super(make, model, year);
        this.pakingAssistEnabled = parkingAssistEnabled;
    }

    parkAssist() {
        this.pakingAssistEnabled = true;
        console.log(`Parking Assist is Enabled.`);
    }

    start(): void {
        console.log('Remote Start');
    }
    stop(): void {
        console.log("Remote Stop");
    }
}


let threeSeires = new ThreeSeries("Germany", "i3", "2018", false);
console.log(threeSeires.cruiseControlEnabled);
