interface Flight {
    flightNo: number;
    from: string;
    to: string;

    display(): void;
}

class FlightClass implements Flight {
    flightNo!: number;
    from!: string;
    to!: string;

    constructor(flightNo: number, from: string, to: string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    display(): void {
        console.log(`${this.flightNo}:-  ${this.from} -> ${this.to}`);
    }
}

let userFlight: FlightClass = new FlightClass(345, "Amsterdam", "Delhi");
userFlight.display();