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
}

class ThreeSeries extends BMW {
    //BMW come for free here 
    cruiseControlEnabled!: boolean;
}

class FiveSeries extends BMW {
    pakingAssistEnabled!: boolean;
}