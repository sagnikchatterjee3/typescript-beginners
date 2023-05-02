class Check {
    //making this static means that it doesnt require extra memory.
    static bankName : string = "Bank Of America";
    customerName!: string;
    accNo!: number;
    routingNo!: number;
}


let check = new Check();
check.accNo;

//can use the stastic property directly using class name 
console.log(Check.bankName);